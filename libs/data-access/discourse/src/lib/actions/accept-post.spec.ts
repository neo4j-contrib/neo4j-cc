import { Effect, pipe, Either, Duration } from '@neo4j-cc/prelude';
import { DiscourseApiConfiguration } from '../data-access-discourse';

import { createPostAt, createTopicAt, NewDiscourseTopic } from './create-post';

import { acceptPostAt } from './accept-post';

import { arbitraryPost, arbitraryTopic } from '../discourse-arb';

describe("acceptPost", () => {

  const discourseApiConfig:DiscourseApiConfiguration = {
    baseUrl: process.env.NX_DISCOURSE_API_URL || 'Missing DISCOURSE_API_URL',
    apiKey: process.env.NX_DISCOURSE_API_KEY || 'Missing NX_DISCOURSE_API_KEY',
    apiUsername: process.env.NX_DISCOURSE_API_USER || 'Missing DISCOURSE_API_USER',
    discourseConnectSecret: process.env.NX_DISCOURSE_CONNECT_SECRET || 'Missing NX_DISCOURSE_CONNECT_SECRET'
  }

  it("create topic, reply with post, accept post", async() => {
    const createTopic = createTopicAt(discourseApiConfig);
    const createPost = createPostAt(discourseApiConfig);
    const acceptPost = acceptPostAt(discourseApiConfig);

    const result = await pipe(
      createTopic(arbitraryTopic()),
      Effect.flatMap( (newTopic) => createPost(arbitraryPost(newTopic.topic_id))),
      Effect.flatMap( (firstReply) => acceptPost(firstReply)),
      // Effect.flatMap(jsonBody),
      Effect.unsafeRunPromiseEither
    )

    if (Either.isLeft(result)) {
      Either.mapLeft( (error) => console.log(error))(result)
    }
    expect(Either.getOrNull(result)).toStrictEqual({success:"OK"})
    
    // Either.map( (body) => console.log(body))(result);
  }, 10000)
  
})