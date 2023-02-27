import {
  pipe,
  Effect,
  Layer,
  Logger,
  Chunk,
  Option,
  Duration,
} from '@neo4j-cc/prelude';

import * as PR from '@fp-ts/schema/ParseResult';

import { Argv, CommandModule } from 'yargs';

import {
  KhorosService,
  KhorosApiConfig,
  makeLiveKhorosServiceLayer,
  Item,
  KhorosError,
  KhorosAuthor,
  KhorosKudo,
  QueryASingleCollection,
  decodeAuthor,
} from '@neo4j-cc/access-khoros';
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
  LiveHttpService,
  HttpError,
  BufferBodyError,
} from '@neo4j-cc/access-http';
import { ApiResponse } from 'openapi-typescript-fetch';
import { parseISO, formatISO } from 'date-fns';

export type SubcommandErrors =
  | HttpError
  | FetchError
  | JsonBodyError
  | KhorosError
  | HtmlParseError
  | FileSystemError
  | PR.ParseError
  | BufferBodyError;

interface ItemWithMarkdown extends Item {
  body_md: string;
}

export interface CommandOptions {
  collection: string;
  khorosURL: string;
  khorosUser: string;
  khorosPassword: string;
  date: string;
  dir: string;
  page: number;
}

interface SubcommandArgs {
  khoros: KhorosService;
  fs: FileSystemService;
}
/**
 * Map CLI options to configuration needed by service.
 */
const toServiceConfig = (argv: CommandOptions): KhorosApiConfig => ({
  baseUrl: argv.khorosURL,
  login: argv.khorosUser,
  password: argv.khorosPassword,
});

const dateOfDay = (date?: string) =>
  date !== undefined ? parseISO(date) : new Date();

type CollectionName = 'users' | 'messages' | 'boards';

const messagePager = (page: Item[]) =>
  pipe(
    page,
    Effect.forEach((a) => {
      console.log(JSON.stringify(a));
      return Effect.succeed(a);
    })
    // Effect.map( () => undefined)
  );

const getAllMessages = ({ khoros }: SubcommandArgs) =>
  pipe(
    khoros.getAllMessages(messagePager),
    Effect.map(Chunk.flatten),
    Effect.map(Chunk.toReadonlyArray)
  );

const writeMessagesOnDate = (
  day: Date,
  messages: Chunk.Chunk<Item>,
  fs: FileSystemService
) =>
  pipe(
    messages,
    Chunk.toReadonlyArray,
    (messageArray) =>
      fs.write({ path: pathForMessagesOnDate(day), content: messageArray }),
    Effect.tap(() =>
      Effect.log(
        `Wrote ${messages.length} messages on ${formatISO(day, {
          representation: 'date',
        })}`
      )
    )
  );

const dropMessageProperty = (kudo: KhorosKudo) => ({
  type: kudo.type,
  id: kudo.id,
  kref: kudo.href,
  user: kudo.user,
  time: kudo.time,
  weight: kudo.weight,
});

const enrichMessage = (message: Item) =>
  pipe(
    Effect.Do(),
    Effect.bind('khoros', () => Effect.service(KhorosService)),
    Effect.bind('details', ({ khoros }) =>
      Effect.struct({
        tags: khoros.getTagsForMessage(message.id),
        labels: khoros.getLabelsForMessage(message.id),
        custom_tags: khoros.getCustomTagsForMessage(message.id),
        kudos: pipe(
          khoros.getKudosForMessage(message.id),
          Effect.map(Chunk.map(dropMessageProperty)),
          Effect.map(Chunk.toReadonlyArray)
        ),
      })
    ),
    Effect.flatMap(({ details }) => Effect.succeed({ ...message, ...details }))
  );

const writeEnrichedMessagesOnDate = (day: Date, messages: Chunk.Chunk<Item>) =>
  pipe(
    Effect.service(FileSystemService),
    Effect.flatMap((fs) =>
      pipe(
        messages,
        Effect.forEach(enrichMessage),
        Effect.map(Chunk.toReadonlyArray),
        Effect.flatMap((messageArray) =>
          fs.write({
            path: pathForEnrichedMessagesOnDate(day),
            content: messageArray,
          })
        ),
        Effect.tap(() =>
          Effect.log(
            `Wrote ${messages.length} enriched messages on ${formatISO(day, {
              representation: 'date',
            })}`
          )
        )
      )
    )
  );

const exportMessagesOnDate =
  ({ day }: { day: Date }) =>
  ({ khoros, fs }: SubcommandArgs) =>
    pipe(
      khoros.getMessagesOnDate({ day }),
      Effect.flatMap((messages) =>
        Effect.collectAll([
          writeMessagesOnDate(day, messages, fs),
          writeEnrichedMessagesOnDate(day, messages),
        ])
      ),
      Effect.map((x) => x),
      Effect.asUnit
    );

const pathForUser = (user: KhorosAuthor) => `./users/${user.login}.json`;

const pathForAttachment = (attachment: Item) =>
  `./attachments${attachment.href}/${attachment.filename}`;

const pathForMessagesOnDate = (day: Date) =>
  `./messages/messages.${formatISO(day, { representation: 'date' })}.json`;

const pathForEnrichedMessagesOnDate = (day: Date) =>
  `./messages/messages.${formatISO(day, { representation: 'date' })}.rich.json`;

const pathForTagsOf = (message: Item) => `./properties/${message.id}.tags.json`;
const pathForLabelsOf = (message: Item) =>
  `./properties/${message.id}.labels.json`;

const writeUser = (user: KhorosAuthor) =>
  pipe(
    Effect.service(FileSystemService), // like declaring that `FileSystemService` is required in the environment
    Effect.flatMap(({ write }) =>
      write({ path: pathForUser(user), content: JSON.stringify(user) })
    ) // use the `FileSystemService.write()` function, ignoring void result
  );

const writeAllUsers = ({ khoros }: SubcommandArgs) =>
  pipe(
    khoros.getAllUserIDs(),
    Effect.flatMap(
      Effect.forEach((userIdItem) =>
        pipe(
          khoros.getUserById({ id: userIdItem.id }),
          Effect.map(decodeAuthor),
          Effect.flatMap((pr) =>
            PR.isSuccess(pr)
              ? Effect.succeed(pr.right)
              : Effect.fail(pr.left[0])
          ),
          Effect.map(writeUser),
          Effect.delay(Duration.millis(250))
        )
      )
    ),
    Effect.asUnit
  );

const getMessageAttachments = (message: Item) =>
  pipe(
    Effect.service(KhorosService),
    Effect.flatMap((khoros) =>
      khoros.query<QueryASingleCollection>({ q: message.attachments.query })
    ),
    Effect.map((result) =>
      result.data.size > 0 ? result.data.items : ([] as Item[])
    )
  );

const readAttachment = (attachment: Item) =>
  pipe(
    Effect.service(HttpService), // like declaring that `HttpService` is required in the environment
    Effect.flatMap((http) =>
      http.request(attachment.url, {
        headers: { 'content-type': attachment.content_type },
      })
    ),
    Effect.flatMap(bufferBody)
  );

const writeAttachment = (attachment: Item, arrayBuffer: ArrayBuffer) =>
  pipe(
    Effect.service(FileSystemService),
    Effect.flatMap(({ write }) =>
      write({
        path: pathForAttachment(attachment),
        content: Buffer.from(arrayBuffer),
      })
    )
  );
const exportAttachments = (message: Item) =>
  pipe(
    getMessageAttachments(message),
    // Effect.tap((attachments) => Effect.log(`message ${message.id} has ${attachments.length} attachments`)),
    Effect.flatMap(
      Effect.forEach((attachment) =>
        pipe(
          readAttachment(attachment),
          Effect.flatMap((buffer) => writeAttachment(attachment, buffer)),
          Effect.tap(() =>
            Effect.log(
              `wrote ${attachment.content_type} attachment ${attachment.filename}`
            )
          )
        )
      )
    ),
    Effect.asUnit
  );

const getMessageTags = (messageId: string) =>
  pipe(
    Effect.service(KhorosService),
    Effect.flatMap((khoros) => khoros.getTagsForMessage(messageId))
  );

const writeMessageTags = (message: Item, tags: readonly string[]) =>
  pipe(
    Effect.service(FileSystemService),
    Effect.flatMap(({ write }) =>
      write({ path: pathForTagsOf(message), content: tags })
    ),
    Effect.tap(() =>
      Effect.log(`wrote ${tags.length} tags for message ${message.id}`)
    )
  );

const exportMessageTags = (message: Item) =>
  pipe(
    getMessageTags(message.id),
    Effect.flatMap((tags) => writeMessageTags(message, tags))
  );

const writeBoards = ({ khoros }: SubcommandArgs) =>
  pipe(
    khoros.getBoards(),
    Effect.tap((a) => {
      console.log(JSON.stringify(a));
      return Effect.succeed(undefined);
    }),
    Effect.asUnit
  );

const subcommands = (
  argv: CommandOptions
): Record<
  string,
  (
    args: SubcommandArgs
  ) => Effect.Effect<
    HttpService | KhorosService | FileSystemService,
    SubcommandErrors,
    void
  >
> => ({
  // 'messages': ({khoros}:{khoros:KhorosService}) => khoros.getMessagesOnDate({day:dateOfDay(argv.date)}),
  messages: exportMessagesOnDate({ day: dateOfDay(argv.date) }),
  // 'messages': getFirstMessageOnDate({day:dateOfDay(argv.date)}),
  // 'messages': writeSpecialUserMessages({id:'2', href:'/somewhere', type: AuthorType.User, view_href: '/view_somewhere'}),
  boards: writeBoards,
  // 'users': getUsersOnPage({page:argv.page}) //({khoros}:{khoros:KhorosService}) => khoros.getUserById({id:1})
  users: writeAllUsers,
});

const doCommand = (
  argv: CommandOptions
): Effect.Effect<
  HttpService | KhorosService | FileSystemService,
  unknown,
  void
> => {
  return pipe(
    Effect.Do(),
    Effect.bind('khoros', () => Effect.service(KhorosService)),
    Effect.bind('fs', () => Effect.service(FileSystemService)),
    Effect.bind(
      'response',
      subcommands(argv)[argv.collection as CollectionName]
    )
    // Effect.map(({response}) => console.log(JSON.stringify(response)))
  );
};

const builder = (argv: Argv): Argv<CommandOptions> =>
  argv
    .positional('collection', {
      type: 'string',
      choices: ['users', 'messages', 'boards'],
      describe: 'the LiQL object collection to access',
    })
    .options({
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
      date: {
        type: 'string',
        demandOption: false,
        describe: 'day (ISO-8601 calendar date)',
      },
      dir: {
        type: 'string',
        demandOption: false,
        describe: 'root directory for exported data',
        default: 'exports/khoros',
      },
      page: {
        type: 'number',
        demandOption: false,
        describe: 'page of results',
      },
    });

const handler = (argv: CommandOptions) =>
  pipe(
    doCommand(argv),
    Effect.provideLayer(
      pipe(
        makeLiveKhorosServiceLayer(toServiceConfig(argv)),
        Layer.provideMerge(makeLocalFileSystemService({ path: argv.dir })),
        Layer.provideMerge(LiveHttpService)
      )
    ),
    Effect.runPromise
  );

export const KhorosCommandModule: CommandModule<unknown, CommandOptions> = {
  command: 'khoros <collection>',
  describe: 'get a collection from the khoros api',
  builder,
  handler,
};
