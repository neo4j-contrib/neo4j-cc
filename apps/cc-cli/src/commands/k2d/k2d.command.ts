import {
  pipe,
  Effect,
  Layer,
  Logger,
  Chunk,
  Option,
  Duration,
  HashSet,
  Either,
  HashMap,
  ReadonlyArray,
  ParseResult as PR,
  String
} from '@neo4j-cc/prelude';


import { Argv, CommandModule } from 'yargs';

import {
  KhorosService,
  KhorosApiConfig,
  makeLiveKhorosServiceLayer,
  Item,
  KhorosError,
  decodeAuthor,
  sortItemsByMessageDepth,
  KhorosAuthor,
  dedupeBySsoId,
  dedupeById,
  decodeMessage,
  KhorosMessage,
  decodeBoard,
} from '@neo4j-cc/access-khoros';

import {
  makeDiscourseService,
  DiscourseService,
  DiscourseApiConfiguration,
  createOrUpdateSsoUser,
  SsoUserDetails,
  DiscoursePublicUser,
  NewDiscourseTopic,
  GetTopicResponseContent,
  DiscourseServiceError,
  DiscourseCategory,
  DiscoursePrivateUser,
  NewDiscoursePost,
} from '@neo4j-cc/access-discourse';

import {
  FileSystemError,
  FileSystemService,
  makeLocalFileSystemService,
} from '@neo4j-cc/access-fs';

import {
  FetchError,
  HttpService,
  jsonBody,
  bufferBody,
  JsonBodyError,
  htmlToMd,
  HtmlParseError,
} from '@neo4j-cc/access-http';
import { ApiResponse } from 'openapi-typescript-fetch';
import { parseISO } from 'date-fns';
import {
  discourseCategoryNumberFor,
  externalIdFor,
  khorosToSsoUserDetails,
  khorosToDiscourseTopic,
  khorosToDiscoursePost,
  discourseUserFromAuthor,
  findDiscourseTopicForKhorosMessage,
  findPostInTopic,
} from '@neo4j-cc/pipe-khoros-to-discourse';

export type SubcommandErrors =
  | FetchError
  | JsonBodyError
  | KhorosError
  | HtmlParseError
  | FileSystemError;

interface Conversation {
  khoros: {
    topic: Item;
    messages: Chunk.Chunk<Item>;
  };
}

interface ItemWithMarkdown extends Item {
  body_md: string;
}

export interface CommandOptions {
  khorosURL: string;
  khorosUser: string;
  khorosPassword: string;
  discourseKey: string;
  discourseUsername: string;
  discourseUrl: string;
  discourseSecret: string;
  date: string;
}

interface SubcommandArgs {
  khoros: KhorosService;
}
/**
 * Map CLI options to configuration needed by service.
 */
const toKhorosConfig = (argv: CommandOptions): KhorosApiConfig => ({
  baseUrl: argv.khorosURL,
  login: argv.khorosUser,
  password: argv.khorosPassword,
});

const toDiscourseConfig = (
  argv: CommandOptions
): DiscourseApiConfiguration => ({
  apiKey: argv.discourseKey,
  apiUsername: argv.discourseUsername,
  baseUrl: argv.discourseUrl,
  discourseConnectSecret: argv.discourseSecret,
});

/*
Get all messages and authors for a date:

- Khoros: get all topics (message depth = 0)
  - topics = `SELECT * FROM messages WHERE depth = 0 AND post_time > ${start datetime} AND post_time < $(end datetime)`
- Khoros: for each topic-message get Author
  - authors = `SELECT login FROM users WHERE id IN ('12328', '16393', '16392')`
- Discourse: ensure each author exists
  - Get user by external id: `{{baseUrl}}/u/by-external/{{external_id}}.json` where {{external_id}} == khoros.user.sso_id
    - if not found create user
*/

const dateOfDay = (date?: string) =>
  date !== undefined ? parseISO(date) : new Date();

const toConsole = (s: string) => {
  console.log(s);
  return Effect.unit();
};

const pathOfKhorosSsoDiscourse = (
  entry: [KhorosAuthor, SsoUserDetails, DiscoursePrivateUser]
) =>
  `(:KhorosUser {login:${entry[0].login}, sso_id:${entry[0].sso_id}})-->(:SsoUserDetails {username:${entry[1].username}})-->(:DiscourseUser {id:${entry[2].id}, username:${entry[2].username}})`;

const authorsFromMessages = (
  messages: Chunk.Chunk<KhorosMessage>,
  khoros: KhorosService
) =>
  pipe(
    messages,
    Chunk.map((message) => message.author),
    Effect.forEach((author) =>
      pipe(
        khoros.getUserById({ id: author.id })
        /** ABKTODO: Catch KhorosError, which can happen when a user does not exist. There is an "Anonymous" user which should
         * probably be mapped to a well-known netural user, like me :)
         * For now, skip these users. _But_ this will cause problems with posting messages! Warning for future self.
         */
        // Effect.catchTag("KhorosError", (_) => Effect.logError(`Failed to get user for author: ${JSON.stringify(author)}`)),
      )
    ),
    Effect.map(Chunk.compact),
    Effect.map(Chunk.filter((foundAuthor) => foundAuthor.sso_id !== undefined)) // drop authors that are missing sso_id
    // Effect.map(Chunk.compact),
    // Effect.map(Chunk.map(decodeAuthor)),
    // Effect.map(x => x),
    // Effect.collect(Chunk.map((a) => PR.isSuccess(a) ? Either.right(a.right) : Either.left(a.left))),
    // Effect.flatMap(Effect.forEach(pr => PR.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0]))),
  );

const topicsFromMessages = (
  messages: Chunk.Chunk<KhorosMessage>,
  khoros: KhorosService
) =>
  pipe(
    messages,
    Effect.forEach((message) =>
      message.depth === 0
        ? Effect.succeed(message)
        : khoros.getMessageById(message.topic.id)
    ),
    Effect.map(dedupeById),
    Effect.map(Chunk.map(decodeMessage)),
    Effect.flatMap(
      Effect.forEach((pr) =>
        PR.isSuccess(pr)
          ? Effect.succeed(pr.right)
          : Effect.fail(new JsonBodyError('could not decode a KhorosMessage'))
      )
    )
  );

const postsFromMessages = (messages: Chunk.Chunk<KhorosMessage>) =>
  pipe(
    messages,
    Chunk.filter((message) => message.depth > 0)
  );

const syncSsoUsers = (
  userPairs: Chunk.Chunk<[KhorosAuthor, SsoUserDetails]>,
  discourse: DiscourseService
) =>
  pipe(
    userPairs,
    Effect.forEach((khorosSsoPair) =>
      pipe(
        Effect.log(
          `syncing: { login: ${khorosSsoPair[0].login}, email:${khorosSsoPair[1].email} }`
        ),
        Effect.flatMap(() => discourse.syncSso(khorosSsoPair[1])),
        Effect.map(
          (discourseUser) =>
            [...khorosSsoPair, discourseUser] as [
              KhorosAuthor,
              SsoUserDetails,
              DiscoursePrivateUser
            ]
        ),
        Effect.delay(Duration.millis(500))
      )
    )
    // Effect.forEach( (khorosSsoPar) => ([... khorosSsoPar, discourse.syncSso(khorosSSoPair[1])]) ),
    // Effect.map(Chunk.map( user => [user.single_sign_on_record.external_id, user] as const)),
    // Effect.map(HashMap.from)
    // Effect.flatMap(Effect.forEach(jsonBody)),
    // Effect.map(Chunk.map(decodeUser)),
    // Effect.flatMap(Effect.forEach(pr => PR.isSuccess(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left[0]) ))
    // Effect.asUnit
  );

const doCommand = (
  argv: CommandOptions
): Effect.Effect<
  KhorosService | DiscourseService | FileSystemService,
  unknown,
  void
> => {
  return pipe(
    Effect.Do(),
    Effect.bind('khoros', () => Effect.service(KhorosService)),
    Effect.bind('fs', () => Effect.service(FileSystemService)),
    Effect.bind('discourse', () => Effect.service(DiscourseService)),
    // Effect.bind("khoros_boards", ({khoros}) => pipe(khoros.getBoards(), Effect.map(Chunk.toReadonlyArray))),
    // Effect.tap( ({khoros_boards}) => toConsole(JSON.stringify(khoros_boards))),
    Effect.bind('discourse_categories', ({ discourse }) =>
      pipe(discourse.listCategories(), Effect.map(Chunk.toReadonlyArray))
    ),
    // Effect.tap(({discourse_categories}) => Effect.log(`discourse_categories: ${discourse_categories.length}`)),
    // Effect.tap( ({discourse_categories}) => toConsole(JSON.stringify(discourse_categories))),
    Effect.bind('khoros_messages', ({ khoros }) =>
      pipe(
        khoros.getAllMessagesOnDate({ day: dateOfDay(argv.date) }),
        Effect.map(sortItemsByMessageDepth),
        Effect.map(Chunk.map(decodeMessage)),
        Effect.flatMap(
          Effect.forEach((pr) =>
            PR.isSuccess(pr)
              ? Effect.succeed(pr.right)
              : Effect.fail(
                  new DiscourseServiceError(
                    `failed to decode KhorosMessage, because: ${JSON.stringify(
                      pr.left[0]
                    )}`
                  )
                )
          )
        )
      )
    ),
    Effect.tap(({ khoros_messages }) =>
      Effect.log(`khoros_messages: ${khoros_messages.length}`)
    ),
    // Effect.tap( ({khoros_messages}) => toConsole(JSON.stringify(Chunk.toReadonlyArray(khoros_messages)))),
    Effect.bind('khoros_topics', ({ khoros, khoros_messages }) =>
      pipe(topicsFromMessages(khoros_messages, khoros))
    ),
    // Effect.tap( ({khoros_topics}) => toConsole(JSON.stringify(Chunk.toReadonlyArray(khoros_topics)))),
    Effect.tap(({ khoros_topics }) =>
      Effect.log(`khoros_topics: ${khoros_topics.length}`)
    ),
    Effect.bind('khoros_posts', ({ khoros_messages }) =>
      Effect.succeed(postsFromMessages(khoros_messages))
    ),
    Effect.tap(({ khoros_posts }) =>
      Effect.log(`khoros_posts: ${khoros_posts.length}`)
    ),
    Effect.bind(
      'khoros_authors',
      ({ khoros, khoros_messages, khoros_topics }) =>
        pipe(
          authorsFromMessages(khoros_messages, khoros),
          Effect.flatMap((messageAuthors) =>
            pipe(
              authorsFromMessages(khoros_topics, khoros),
              Effect.map((topicAuthors) => messageAuthors.concat(topicAuthors))
            )
          ),
          Effect.map(dedupeBySsoId)
        )
    ),
    // Effect.tap( ({khoros_authors}) => toConsole(JSON.stringify(Chunk.toReadonlyArray(khoros_authors)))),
    // Effect.tap(({khoros_authors}) => Effect.log(`khoros_authors: ${khoros_authors.length}`)),
    Effect.bind('khoros_sync_pairs', ({ khoros_authors }) =>
      pipe(
        khoros_authors,
        Chunk.map((fromKhoros) =>
          pipe(
            khorosToSsoUserDetails(fromKhoros),
            Option.map(
              (ssoDetails) =>
                [fromKhoros, ssoDetails] as [KhorosAuthor, SsoUserDetails]
            )
          )
        ),
        Chunk.compact,
        Effect.succeed
      )
    ),
    // Effect.tap( ({khoros_sync_pairs}) => pipe(
    //   khoros_sync_pairs,
    //   Chunk.map( a => `(:KhorosUser {login:${a[0].login}, sso_id:${a[0].sso_id}})-->(:SsoUserDetails {username:${a[1].username}})`),
    //   Chunk.forEach(console.log),
    //   Effect.unit
    // )),
    Effect.bind(
      'khoros_sync_discourse_users',
      ({ discourse, khoros_sync_pairs }) =>
        syncSsoUsers(khoros_sync_pairs, discourse)
    ),
    // Effect.tap(({khoros_sync_discourse_users}) => Effect.log(`synced users with discourse: ${khoros_sync_discourse_users.length}`)),
    Effect.tap(({ khoros_sync_discourse_users }) =>
      pipe(
        khoros_sync_discourse_users,
        Chunk.map(
          (a) =>
            `(:KhorosUser {login:${a[0].login}, sso_id:${a[0].sso_id}})-->(:SsoUserDetails {username:${a[1].username}, external_id:${a[1].external_id}}, email:${a[1].email})-->(:DiscoursePrivateUser {username:${a[2].username}, id:${a[2].id}, ${a[2].single_sign_on_record.external_id}})`
        ),
        Effect.forEach(Effect.log)
      )
    ),
    // Effect.tap( ({khoros_sync_discourse_users}) => pipe(khoros_sync_discourse_users,Chunk.map(pathOfKhorosSsoDiscourse),Chunk.forEach(toConsole),Effect.unit)),
    Effect.bind(
      'khoros_discourse_topics',
      ({
        khoros,
        discourse,
        khoros_topics,
        discourse_categories,
        khoros_sync_discourse_users,
      }) =>
        pipe(
          khoros_topics,
          Effect.forEach((khorosTopic) =>
            pipe(
              khoros.getTagsForMessage(khorosTopic.id),
              Effect.tap(() =>
                Effect.log(
                  `migrating topic ${khorosTopic.id} ${khorosTopic.post_time_friendly} for ${khorosTopic.author.login}`
                )
              ),
              Effect.flatMap((tags) =>
                pipe(
                  khoros.getLabelsForMessage(khorosTopic.id),
                  Effect.map((labels) => [...tags, ...labels]),
                  Effect.map(ReadonlyArray.map((tag) => tag.toLowerCase())),
                  Effect.map(ReadonlyArray.uniq(String.Equivalence))
                )
              ),
              // Effect.tap(tags => Effect.log(`message tags: ${JSON.stringify(tags)}`)),
              Effect.map((allTags) =>
                renameCategorySlugs(allTags, discourse_categories)
              ),
              Effect.map(removeUnacceptableTags),
              Effect.flatMap((labelsAndTags) =>
                khorosToDiscourseTopic(
                  khorosTopic,
                  discourseCategoryNumberFor(
                    khorosTopic.board,
                    discourse_categories
                  ),
                  [...labelsAndTags, 'khoros']
                )
              ),
              Effect.map((preparedDiscourseTopic) =>
                pipe(
                  discourseUserFromAuthor(
                    khorosTopic.author,
                    khoros_sync_discourse_users
                  ),
                  // Option.map( foundAuthor => ([foundAuthor, preparedDiscourseTopic] as [DiscourseUser, NewDiscourseTopic])),
                  Option.map(
                    // () => Effect.fail(`Author ${JSON.stringify(khorosTopic.author)} not found`),
                    (foundAuthor) =>
                      [foundAuthor, preparedDiscourseTopic] as [
                        DiscoursePrivateUser,
                        NewDiscourseTopic
                      ]
                  )
                )
              ),

              Effect.map(
                Option.map((preparedAuthorWithPost) =>
                  discourse.getOrCreateTopicAs(
                    preparedAuthorWithPost[0].username,
                    preparedAuthorWithPost[1]
                  )
                )
              ),
              Effect.flatMap(Effect.fromOption),
              Effect.flatten,
              Effect.map(Option.some),
              Effect.catchTag('None', () => Effect.succeed(Option.none)),
              Effect.map(
                Option.map(
                  (discourseTopic) =>
                    [khorosTopic, discourseTopic] as [
                      KhorosMessage,
                      GetTopicResponseContent
                    ]
                )
              ),
              Effect.delay(Duration.seconds(2))
            )
          ),
          Effect.map(Chunk.compact)
        )
    ),
    // Effect.tap( ({khoros_discourse_topics}) => pipe(khoros_discourse_topics, Chunk.toReadonlyArray, JSON.stringify, console.log, Effect.unit)),
    // Effect.tap( ({khoros_discourse_topics}) => Effect.log(`migrated ${khoros_discourse_topics.length} topics`)),
    Effect.bind(
      'khoros_discourse_posts',
      ({
        discourse,
        khoros_posts,
        khoros_discourse_topics,
        khoros_sync_discourse_users,
      }) =>
        pipe(
          khoros_posts,
          Chunk.filter((khorosPost) => khorosPost.author.id !== '-1'),
          Chunk.map((khorosPost) =>
            pipe(
              findDiscourseTopicForKhorosMessage(
                khorosPost.topic.id,
                khoros_discourse_topics
              ),
              Option.map(
                (foundTopic) =>
                  [khorosPost, foundTopic] as [
                    KhorosMessage,
                    GetTopicResponseContent
                  ]
              )
            )
          ),
          Chunk.compact,
          Effect.forEach(([khorosPost, matchingDiscourseTopic]) =>
            pipe(
              // findDiscourseTopicForKhorosMessage(khorosPost.topic.id, khoros_discourse_topics),
              // Option.match(
              //   () => Effect.fail(new DiscourseServiceError(`discourse topic not found for khoros id ${khorosPost.parent.id}`)),
              //   (matchingDiscourseTopic) => Effect.succeed(matchingDiscourseTopic)
              // ),
              // Effect.tap(() => Effect.log(`migrating post ${khorosPost.id} ${khorosPost.post_time} by ${khorosPost.author.login} to topic ${khorosPost.topic.id}`)),
              // Effect.flatMap( matchingDiscourseTopic => pipe(
              khorosToDiscoursePost(matchingDiscourseTopic.id, khorosPost),
              Effect.tap(() =>
                Effect.log(
                  `migrating post ${khorosPost.id} ${khorosPost.post_time_friendly} by ${khorosPost.author.login} to topic ${khorosPost.topic.id}`
                )
              ),
              Effect.map((preparedPost) => [
                matchingDiscourseTopic,
                preparedPost,
              ]),
              // )),
              Effect.flatMap(([discourseTopic, preparedDiscoursePost]) =>
                pipe(
                  discourseUserFromAuthor(
                    khorosPost.author,
                    khoros_sync_discourse_users
                  ),
                  Option.match(
                    () =>
                      Effect.fail(
                        new DiscourseServiceError(
                          `Author ${JSON.stringify(
                            khorosPost.author
                          )} not found`
                        )
                      ),
                    (foundAuthor) =>
                      Effect.succeed([
                        discourseTopic,
                        foundAuthor,
                        preparedDiscoursePost,
                      ] as [
                        GetTopicResponseContent,
                        DiscoursePrivateUser,
                        NewDiscoursePost
                      ])
                  )
                )
              ),
              Effect.flatMap(
                ([discourseTopic, discourseAuthor, preparedDiscoursePost]) =>
                  pipe(
                    findPostInTopic(
                      discourseTopic,
                      preparedDiscoursePost,
                      discourseAuthor.username
                    ),
                    Option.match(
                      () =>
                        pipe(
                          discourse.createPostAs(
                            discourseAuthor.username,
                            preparedDiscoursePost
                          ),
                          Effect.map((_) => preparedDiscoursePost)
                        ),
                      (_) =>
                        pipe(
                          Effect.log('post already exists'),
                          Effect.map((_) => preparedDiscoursePost)
                        )
                    )
                  )
              ),
              Effect.delay(Duration.seconds(1))
            )
          )
        )
    ),
    Effect.flatMap(() => Effect.unit())
  );
};

const builder = (argv: Argv): Argv<CommandOptions> =>
  argv.options({
    khorosURL: {
      type: 'string',
      demandOption: true,
      describe: 'Khoros API base URL',
    },
    khorosUser: {
      type: 'string',
      demandOption: true,
      describe: 'Khoros authentication user',
    },
    khorosPassword: {
      type: 'string',
      demandOption: true,
      describe: 'Khoros authenication password',
    },
    discourseKey: {
      type: 'string',
      demandOption: true,
      describe: 'Discourse API key',
    },
    discourseUsername: {
      type: 'string',
      demandOption: true,
      describe: 'Discourse API username',
    },
    discourseUrl: {
      type: 'string',
      demandOption: true,
      describe: 'Discourse API URL',
    },
    discourseSecret: {
      type: 'string',
      demandOption: true,
      describe: 'Discourse Connect secret used for signing ',
    },
    date: {
      type: 'string',
      demandOption: false,
      describe: 'day (ISO-8601 calendar date)',
    },
  });

const handler = (argv: CommandOptions) =>
  pipe(
    doCommand(argv),
    Effect.provideLayer(
      pipe(
        makeLiveKhorosServiceLayer(toKhorosConfig(argv)),
        Layer.provideMerge(makeLocalFileSystemService({ path: '.' })),
        Layer.provideMerge(makeDiscourseService(toDiscourseConfig(argv)))
      )
    ),
    Effect.runPromise
  );

export const KhorosToDiscourseCommandModule: CommandModule<
  unknown,
  CommandOptions
> = {
  command: 'k2d',
  describe: 'move messages on users from Khoros to Discourse',
  builder,
  handler,
};

const renameCategorySlugs = (
  allTags: string[],
  discourse_categories: readonly DiscourseCategory[]
): readonly string[] =>
  pipe(
    allTags,
    ReadonlyArray.map((tag) =>
      pipe(
        discourse_categories,
        ReadonlyArray.findFirst((category) => category.slug === tag),
        Option.map((foundCategory) => `${foundCategory.slug}-tagged`),
        Option.getOrElse(() => tag)
      )
    )
  );

const removeUnacceptableTags = (allTags: string[]): readonly string[] =>
  pipe(
    allTags,
    ReadonlyArray.difference(String.Equivalence)(['kudos-4']) // removes given tags from allTags
    // ReadonlyArray.filter( tag => pipe(
    //   ReadonlyArray.of(["kudos-4"]),
    //   ReadonlyArray.contains((self, that) => (self === that)))
    // ))
  );
