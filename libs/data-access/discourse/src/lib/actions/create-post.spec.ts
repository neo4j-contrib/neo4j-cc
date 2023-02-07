import { Effect, pipe, Either } from '@neo4j-cc/prelude';
import { DiscourseApiConfiguration } from '../data-access-discourse';

import { createTopicAt, NewDiscourseTopic } from './create-post';

import { arbitraryTopic } from '../discourse-arb';

describe.skip("createTopic", () => {

  const discourseApiConfig:DiscourseApiConfiguration = {
    baseUrl: process.env.NX_DISCOURSE_API_URL || 'Missing DISCOURSE_API_URL',
    apiKey: process.env.NX_DISCOURSE_API_KEY || 'Missing NX_DISCOURSE_API_KEY',
    apiUsername: process.env.NX_DISCOURSE_API_USER || 'Missing DISCOURSE_API_USER',
    discourseConnectSecret: process.env.NX_DISCOURSE_CONNECT_SECRET || 'Missing NX_DISCOURSE_CONNECT_SECRET'
  }

  it.skip("creates a new topic as an Effect", async() => {
    const createTopic = createTopicAt(discourseApiConfig);
    const result = await pipe(
      createTopic(arbitraryTopic()),
      // Effect.flatMap(jsonBody),
      Effect.unsafeRunPromiseEither
    )
    // 422 is because of a parse error of the params
    // see: https://github.com/discourse/discourse/blob/f05da14fb607c4b3906f0f83faea4b0f5694f043/app/controllers/admin/users_controller.rb#L511
    if (Either.isLeft(result)) {
      Either.mapLeft( (error) => console.log(error))(result)
    }
    expect(Either.isRight(result)).toBeTruthy()
    
    // Either.map( (body) => console.log(body))(result);
  })
  
})