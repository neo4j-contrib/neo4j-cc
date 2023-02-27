/* eslint-disable @typescript-eslint/no-empty-interface */
import * as S from '@fp-ts/schema/Schema';
import * as P from '@fp-ts/schema/Parser';

import { Effect, Layer, Context, pipe, Option } from '@neo4j-cc/prelude';

import {
  jsonBody,
  request,
  headersAsRecord,
  JsonBodyError,
} from '@neo4j-cc/access-http';

import { DiscourseApiConfiguration } from '../data-access-discourse';
import {
  CreateTopicPostPMResponseContent,
  GetTopicResponseContent,
} from '../discourse.types';
import { DiscoursePublicUser } from '../discourse-schemas';
import { DiscourseApiError, DiscourseServiceError } from '../discourse.service';

export const NewDiscourseTopic = S.struct({
  title: S.string,
  raw: S.string, // in markdown
  category: S.optional(S.number),
  created_at: S.string, // ISO date
  embed_url: S.string, // Provide a URL from a remote system to associate a forum topic with that URL, typically for using Discourse as a comments system for an external blog
  external_id: S.string, // Provide an external_id from a remote system to associate a forum topic with that id
  tags: S.optional(S.array(S.string)),
});

export interface NewDiscourseTopic extends S.Infer<typeof NewDiscourseTopic> {}

export const decodeNewDiscourseTopic = P.decode(NewDiscourseTopic);

export const isDiscourseTopic = P.is(NewDiscourseTopic);

export const NewDiscoursePost = S.struct({
  topic_id: S.number, // topic this post is replying to
  raw: S.string, // in markdown
  created_at: S.string, // ISO date
  reply_to_post_number: S.optional(S.number), // post number replied to
});

export interface NewDiscoursePost extends S.Infer<typeof NewDiscoursePost> {}

export const decodeNewDiscoursePost = P.decode(NewDiscoursePost);

export const isNewDiscoursePost = P.is(NewDiscoursePost);

export const createTopicAt = (api: DiscourseApiConfiguration) => {
  const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const headers = new Headers();
  headers.append('Api-Username', apiUsername);
  headers.append('Api-Key', apiKey);
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const createTopic = (post: NewDiscourseTopic) => {
    const raw = JSON.stringify(post);

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow' as const,
    };

    return pipe(
      request(`${api.baseUrl}/posts.json`, requestOptions),
      Effect.flatMap(jsonBody),
      Effect.map((x) => x as CreateTopicPostPMResponseContent)
    );
  };
  return createTopic;
};

export const createTopicAsUserAt = (api: DiscourseApiConfiguration) => {
  // const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const createTopicAs = (
    effectiveUsername: string,
    post: NewDiscourseTopic
  ) => {
    const headers = new Headers();
    headers.append('Api-Username', effectiveUsername);
    headers.append('Api-Key', apiKey);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const raw = JSON.stringify(post);

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow' as const,
    };

    return pipe(
      request(`${api.baseUrl}/posts.json`, requestOptions),
      Effect.flatMap(jsonBody),
      Effect.map((x) => x as CreateTopicPostPMResponseContent)
    );
  };
  return createTopicAs;
};

export const createPostAt = (api: DiscourseApiConfiguration) => {
  const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const headers = new Headers();
  headers.append('Api-Username', apiUsername);
  headers.append('Api-Key', apiKey);
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const createPost = (post: NewDiscoursePost) => {
    const raw = JSON.stringify(post);

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow' as const,
    };

    return pipe(
      request(`${api.baseUrl}/posts.json`, requestOptions),
      Effect.flatMap(jsonBody),
      Effect.map((x) => x as CreateTopicPostPMResponseContent)
    );
  };
  return createPost;
};

// export const createTopicAsUserAtDeleteme = (api:DiscourseApiConfiguration) => {

//   // const apiUsername = api.apiUsername;
//   const apiKey = api.apiKey

//   const createTopicAs = (effectiveUser: MinimalDiscourseUser, post:NewDiscourseTopic) => {

//     const headers = new Headers();
//     headers.append("Api-Username", effectiveUser.username);
//     headers.append("Api-Key", apiKey);
//     headers.append("Content-Type", "application/json");
//     headers.append("Accept", "application/json");

//     const raw = JSON.stringify(post);

//     const requestOptions = {
//       method: 'POST',
//       headers,
//       body: raw,
//       redirect: 'follow' as const
//     };

//     return pipe(
//       request(`${api.baseUrl}/posts.json`, requestOptions),
//       Effect.flatMap(jsonBody),
//       Effect.map(x => x as CreateTopicPostPMResponseContent)
//     )

//   }
//   return createTopicAs
// }

export const getTopicByExternalIdAt = (
  api: DiscourseApiConfiguration
): (({
  external_id,
}: {
  external_id: string;
}) => Effect.Effect<
  never,
  DiscourseApiError,
  Option.Option<GetTopicResponseContent>
>) => {
  const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const headers = new Headers();
  headers.append('Api-Username', apiUsername);
  headers.append('Api-Key', apiKey);
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const getTopicByExternalId = ({
    external_id,
  }: {
    external_id: string;
  }): Effect.Effect<
    never,
    DiscourseApiError,
    Option.Option<GetTopicResponseContent>
  > => {
    const requestOptions = {
      method: 'GET',
      headers,
      redirect: 'follow' as const,
    };

    return pipe(
      request(
        `${api.baseUrl}/t/external_id/${external_id}.json`,
        requestOptions
      ),
      Effect.flatMap(jsonBody),
      Effect.map<unknown, Option.Option<GetTopicResponseContent>>((x) =>
        Option.some(x as GetTopicResponseContent)
      ),
      Effect.catchTag('HttpError', (error) =>
        error.response.status === 404
          ? Effect.succeed(Option.none<GetTopicResponseContent>())
          : Effect.fail(error)
      )
    );
  };
  return getTopicByExternalId;
};

export const getOrCreateTopicAt = (api: DiscourseApiConfiguration) => {
  const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const headers = new Headers();
  headers.append('Api-Username', apiUsername);
  headers.append('Api-Key', apiKey);
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const getOrCreateTopic = (post: NewDiscourseTopic) => {
    const getTopicByExternalId = getTopicByExternalIdAt(api);

    const raw = JSON.stringify(post);

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow' as const,
    };

    return pipe(
      getTopicByExternalId({ external_id: post.external_id }),
      Effect.flatMap(
        Option.match(
          () =>
            pipe(
              request(`${api.baseUrl}/posts.json`, requestOptions),
              Effect.flatMap(jsonBody),
              Effect.map((body) => body as CreateTopicPostPMResponseContent),
              Effect.flatMap((_) =>
                getTopicByExternalId({ external_id: post.external_id })
              ),
              Effect.flatMap(
                Option.match(
                  () =>
                    Effect.fail(
                      new DiscourseServiceError(
                        `failed to create topic for ${post.external_id}`,
                        post
                      )
                    ),
                  (foundTopic) => Effect.succeed(foundTopic)
                )
              )
            ),
          (existingTopic) => Effect.succeed(existingTopic)
        )
      ),
      Effect.map((x) => x)
    );
  };
  return getOrCreateTopic;
};

export const getOrCreateTopicAsUserAt = (api: DiscourseApiConfiguration) => {
  // const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const getOrCreateTopic = (
    effectiveUsername: string,
    post: NewDiscourseTopic
  ) => {
    const headers = new Headers();
    headers.append('Api-Username', effectiveUsername);
    headers.append('Api-Key', apiKey);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const getTopicByExternalId = getTopicByExternalIdAt(api);

    const raw = JSON.stringify(post);

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow' as const,
    };

    return pipe(
      getTopicByExternalId({ external_id: post.external_id }),
      Effect.flatMap(
        Option.match(
          () =>
            pipe(
              // topic not found, so create it!
              request(`${api.baseUrl}/posts.json`, requestOptions),
              Effect.catchTag('HttpError', (error) =>
                Effect.fail(
                  new DiscourseServiceError(
                    `failed to create post ${post.external_id} as ${effectiveUsername}`,
                    {
                      error: error.response,
                      headers: headersAsRecord(error.response.headers),
                      body: raw,
                    }
                  )
                )
              ),
              Effect.flatMap(jsonBody),
              Effect.map((body) => body as CreateTopicPostPMResponseContent),
              Effect.flatMap((_) =>
                getTopicByExternalId({ external_id: post.external_id })
              ),
              Effect.flatMap(
                Option.match(
                  () =>
                    Effect.fail(
                      new DiscourseServiceError(
                        `failed to create topic for ${post.external_id}`,
                        post
                      )
                    ),
                  (foundTopic) => Effect.succeed(foundTopic)
                )
              )
            ),
          (existingTopic) => Effect.succeed(existingTopic)
        )
      ),
      Effect.map((x) => x as GetTopicResponseContent)
    );
  };
  return getOrCreateTopic;
};

export const createPostAsUserAt = (api: DiscourseApiConfiguration) => {
  // const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const createPost = (effectiveUsername: string, post: NewDiscoursePost) => {
    const headers = new Headers();
    headers.append('Api-Username', effectiveUsername);
    headers.append('Api-Key', apiKey);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const raw = JSON.stringify(post);

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow' as const,
    };

    return pipe(
      request(`${api.baseUrl}/posts.json`, requestOptions),
      Effect.catchTag('HttpError', (error) =>
        Effect.fail(
          new DiscourseServiceError(
            `failed to create post ${post.topic_id} as ${effectiveUsername}`,
            {
              error: error.response,
              headers: headersAsRecord(error.response.headers),
              body: raw,
            }
          )
        )
      ),
      Effect.flatMap(jsonBody),
      Effect.map((body) => body as CreateTopicPostPMResponseContent)
    );
  };
  return createPost;
};
