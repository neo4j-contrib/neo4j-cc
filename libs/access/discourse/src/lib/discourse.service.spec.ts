import {
  pipe,
  Effect,
  Layer,
  Logger,
  ReadonlyArray,
  HashMap,
  Either,
  Option,
  Chunk,
} from '@neo4j-cc/prelude';
import { DiscourseApiConfiguration } from './data-access-discourse';
import {
  DiscourseApiError,
  DiscourseService,
  makeDiscourseService,
} from './discourse.service';

import { runtimeDebug } from 'effect/debug';
import { arbitraryPost, arbitraryTopic } from './discourse-arb';
import { AdminListUsersResponseContent } from './discourse.types';
import {
  DiscoursePublicUser,
  DiscoursePrivateUser,
  DiscoursePublicUserItem,
} from './discourse-schemas';

runtimeDebug.traceExecutionLogEnabled = true;
runtimeDebug.defaultLogLevel = 'Debug';

const pickRandomElement = <A>(users: readonly A[]): A =>
  users[Math.floor(Math.random() * users.length)];

describe('DiscourseService', () => {
  const discourseApiConfig: DiscourseApiConfiguration = {
    baseUrl: process.env.NX_DISCOURSE_API_URL || 'Missing DISCOURSE_API_URL',
    apiKey: process.env.NX_DISCOURSE_API_KEY || 'Missing NX_DISCOURSE_API_KEY',
    apiUsername:
      process.env.NX_DISCOURSE_API_USER || 'Missing DISCOURSE_API_USER',
    discourseConnectSecret:
      process.env.NX_DISCOURSE_CONNECT_SECRET ||
      'Missing NX_DISCOURSE_CONNECT_SECRET',
  };

  const discourseLayer = Effect.provideLayer(
    makeDiscourseService(discourseApiConfig)
  );

  const discourseFunctionEffect = <O>(
    f: (
      discourse: DiscourseService
    ) => Effect.Effect<never, DiscourseApiError, O>
  ) =>
    pipe(Effect.service(DiscourseService), Effect.flatMap(f), discourseLayer);

  it('getSite', async () => {
    const fut = (discourse: DiscourseService) => discourse.getSite();

    const result = await pipe(
      discourseFunctionEffect(fut),
      // Effect.catchAllCause(Effect.logErrorCause),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it('createTopic', async () => {
    const createTopic = (discourse: DiscourseService) =>
      discourse.createTopic(arbitraryTopic());

    const result = await pipe(
      discourseFunctionEffect(createTopic),
      Effect.map((x) => x),
      // Effect.catchAllCause(Effect.logErrorCause),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it.skip('createTopic then getTopic', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind('discourse', () => Effect.service(DiscourseService)),
      Effect.bind(
        'freshTopic',
        ({ discourse }: { discourse: DiscourseService }) =>
          discourse.createTopic(arbitraryTopic())
      ),
      Effect.flatMap(({ discourse, freshTopic }) =>
        discourse.getTopic(`${freshTopic.topic_id}`)
      ),
      discourseLayer,
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    }
    expect(Either.isRight(result)).toBeTruthy();
  });
  it.skip('createTopic then reply to it', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind('discourse', () => Effect.service(DiscourseService)),
      Effect.bind(
        'freshTopic',
        ({ discourse }: { discourse: DiscourseService }) =>
          discourse.createTopic(arbitraryTopic())
      ),
      Effect.flatMap(({ discourse, freshTopic }) =>
        discourse.createPost(arbitraryPost(freshTopic.topic_id))
      ),
      discourseLayer,
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right)
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it.skip('createTopic then find it by external_id', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind('discourse', () => Effect.service(DiscourseService)),
      Effect.bind('topicDetail', () => Effect.succeed(arbitraryTopic())),
      Effect.bind('freshTopic', ({ discourse, topicDetail }) =>
        discourse.createTopic(topicDetail)
      ),
      Effect.flatMap(({ discourse, topicDetail }) =>
        discourse.getTopicByExternalId({ external_id: topicDetail.external_id })
      ),
      discourseLayer,
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(JSON.stringify(result.right))
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it.skip('getOrCreateTopic for fresh topic, repeat, they should be the same', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind('discourse', () => Effect.service(DiscourseService)),
      Effect.bind('topicDetail', () =>
        Effect.succeed(
          arbitraryTopic(
            `# getOrCreateTopic\nlike an upsert without transactional safety uniquely :)`
          )
        )
      ),
      // Effect.bind("topicDetail", () => Effect.succeed(arbitraryTopic())),
      Effect.bind('freshTopic', ({ discourse, topicDetail }) =>
        discourse.getOrCreateTopic(topicDetail)
      ),
      Effect.bind('refreshedTopic', ({ discourse, topicDetail }) =>
        discourse.getOrCreateTopic(topicDetail)
      ),
      Effect.flatMap(({ freshTopic, refreshedTopic }) =>
        freshTopic.id === refreshedTopic.id
          ? Effect.succeed('topics match')
          : Effect.fail('topics do not match')
      ),
      discourseLayer,
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // pipe(result.right, Option.getOrElse(() => "no result? weird"), JSON.stringify, console.log)
      // console.log(result.right)
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it.skip('createTopic debug', async () => {
    const debugTopic = {
      title:
        'Non Interactive install is not working while install neo4j enterprise edition',
      external_id: 'khoros_62793',
      created_at: '2022-12-02T11:00:19.096-08:00',
      embed_url:
        'https://community.neo4j.com/t5/drivers-stacks/non-interactive-install-is-not-working-while-install-neo4j/td-p/62793',
      raw: 'I am trying to install neo4j enterprise edition 4.4.15 from rpm package. Non interactive install is not working. Have set the below env variable\n\nexport NEO4J\\_ACCEPT\\_LICENSE\\_AGREEMENT=yes  \nsudo rpm --install neo4j-enterprise-4.4.15-1.noarch.rpm\n\nIt still asks for license agreement. Have tried with other versions as well still the same. Please help on this.',
      category: 10,
      tags: ['test', 'delete-me', 'from-khoros'],
    };
    const createTopic = (discourse: DiscourseService) =>
      discourse.createTopic(debugTopic);

    const result = await pipe(
      discourseFunctionEffect(createTopic),
      Effect.map((x) => x),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it.skip('find non-existent topic by external_id', async () => {
    const createTopic = (discourse: DiscourseService) =>
      discourse.getTopicByExternalId({ external_id: 'no-such-external-id' });

    const result = await pipe(
      discourseFunctionEffect(createTopic),
      Effect.map(Option.match(() => 'not found', JSON.stringify)),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right)
    }
    expect(Either.getOrUndefined(result)).toBe('not found');
  });

  it.skip('createTopic, reply to it, then accept post as solution', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind('discourse', () => Effect.service(DiscourseService)),
      Effect.bind(
        'freshTopic',
        ({ discourse }: { discourse: DiscourseService }) =>
          discourse.createTopic(arbitraryTopic())
      ),
      Effect.bind('firstReply', ({ discourse, freshTopic }) =>
        discourse.createPost(arbitraryPost(freshTopic.topic_id))
      ),
      Effect.flatMap(({ discourse, firstReply }) =>
        discourse.acceptPost(firstReply)
      ),
      discourseLayer,
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right)
    }

    expect(Either.getOrNull(result)).toStrictEqual({ success: 'OK' });
  });
  it.skip('createTopic, reply to it, then reply to the reply', async () => {
    const result = await pipe(
      Effect.Do(),
      Effect.bind('discourse', () => Effect.service(DiscourseService)),
      Effect.bind(
        'freshTopic',
        ({ discourse }: { discourse: DiscourseService }) =>
          discourse.createTopic(arbitraryTopic())
      ),
      Effect.bind('firstReply', ({ discourse, freshTopic }) =>
        pipe(
          arbitraryPost(freshTopic.topic_id),
          (newPost) => ({ ...newPost, reply_to_post_number: 1 }),
          discourse.createPost
        )
      ),
      Effect.flatMap(({ discourse, firstReply }) =>
        pipe(
          arbitraryPost(firstReply.topic_id),
          (newPost) => ({
            ...newPost,
            reply_to_post_number: firstReply.post_number,
            raw: `a nested reply to reply #${firstReply.post_number} of topic ${firstReply.topic_id}`,
          }),
          discourse.createPost
        )
      ),
      discourseLayer,
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right)
    }

    expect(Either.isRight(result)).toBeTruthy();
  });

  it('listUsers', async () => {
    const fut = (discourse: DiscourseService) => discourse.listPublicUsers();

    const result = await pipe(
      discourseFunctionEffect<Chunk.Chunk<DiscoursePublicUserItem>>(fut),
      // Effect.catchAllCause(Effect.logErrorCause),
      // Effect.map(response => response),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right[0]) // show first user found
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it('getUser', async () => {
    const username = 'abk-admin';
    const getAuthor = (discourse: DiscourseService) =>
      pipe(
        Effect.Do(),
        Effect.bind('discourse', () => Effect.succeed(discourse)),
        Effect.flatMap(({ discourse }) => discourse.getUser(username))
      );

    const result = await pipe(
      discourseFunctionEffect(getAuthor),
      Effect.map((x) => x),
      // Effect.catchAllCause(Effect.logErrorCause),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right)
    }
    expect(Either.getOrNull(result)?.username).toBe(username);
  });

  it('getUser at random', async () => {
    const getAuthor = (discourse: DiscourseService) =>
      pipe(
        Effect.Do(),
        Effect.bind('discourse', () => Effect.succeed(discourse)),
        Effect.bind('users', ({ discourse }) => discourse.listPublicUsers()),
        Effect.flatMap(({ discourse, users }) =>
          discourse.getUser(
            pickRandomElement(Chunk.toReadonlyArray(users)).user.username
          )
        )
      );

    const result = await pipe(
      discourseFunctionEffect(getAuthor),
      // Effect.map(x => x),
      // Effect.catchAllCause(Effect.logErrorCause),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right)
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it('getUserByExternalId at random', async () => {
    const getRandomByExternalId = (discourse: DiscourseService) =>
      pipe(
        Effect.Do(),
        Effect.bind('discourse', () => Effect.succeed(discourse)),
        Effect.bind('users', ({ discourse }) => discourse.listPublicUsers()),
        Effect.bind('randomUser', ({ users }) =>
          Effect.succeed(pickRandomElement(Chunk.toReadonlyArray(users)))
        ),
        Effect.bind('randomUserDetails', ({ randomUser }) =>
          discourse.getUserAdminDetails(randomUser.id)
        ),
        Effect.flatMap(({ discourse, randomUserDetails }) =>
          discourse.getUserByExternalId(
            randomUserDetails.single_sign_on_record.external_id
          )
        )
      );

    const result = await pipe(
      discourseFunctionEffect(getRandomByExternalId),
      // Effect.map(x => x),
      // Effect.catchAllCause(Effect.logErrorCause),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log("found user by external id", result.right)
    }
    expect(Either.isRight(result)).toBeTruthy();
  });

  it('post as random user', async () => {
    const randomUserPost = (discourse: DiscourseService) =>
      pipe(
        Effect.Do(),
        Effect.bind('discourse', () => Effect.succeed(discourse)),
        Effect.bind('users', ({ discourse }) => discourse.listPublicUsers()),
        Effect.bind('randomUser', ({ discourse, users }) =>
          discourse.getUser(
            pickRandomElement(Chunk.toReadonlyArray(users)).user.username
          )
        ),
        Effect.flatMap(({ discourse, randomUser }) =>
          discourse.createTopicAs(randomUser.username, arbitraryTopic())
        )
      );

    const result = await pipe(
      discourseFunctionEffect(randomUserPost),
      // Effect.map(x => x),
      // Effect.catchAllCause(Effect.logErrorCause),
      Effect.runPromiseEither
    );
    if (Either.isLeft(result)) {
      console.error(result.left);
    } else {
      // console.log(result.right)
    }
    expect(Either.isRight(result)).toBeTruthy();
  });
});
