/* eslint-disable @typescript-eslint/no-empty-interface */

import { Effect, Layer, Context, pipe, Schema as S, Parser as P, ParseResult as PR, Either } from '@neo4j-cc/prelude';

import { jsonBody, request } from '@neo4j-cc/access-http';

import { DiscourseApiConfiguration } from '../data-access-discourse';

export const OperationSuccessResponse = S.struct({
  success: S.string,
});

export interface OperationSuccessResponse
  extends S.To<typeof OperationSuccessResponse> {}

export const decodeOperationSuccessResponse =
  S.parseEither<OperationSuccessResponse,OperationSuccessResponse>(OperationSuccessResponse);

export const DiscoursePost = S.struct({
  id: S.number,
  created_at: S.string, // ISO date
});

export interface DiscoursePost extends S.To<typeof DiscoursePost> {}

export const decodeDiscoursePostStrict = S.parseEither<DiscoursePost,DiscoursePost>(DiscoursePost);
export const decodeDiscoursePost = (i: unknown) =>
  decodeDiscoursePostStrict(i);

export const isDiscoursePost = P.is(DiscoursePost);

export const acceptPostAt = (api: DiscourseApiConfiguration) => {
  const apiUsername = api.apiUsername;
  const apiKey = api.apiKey;

  const headers = new Headers();
  headers.append('Api-Username', apiUsername);
  headers.append('Api-Key', apiKey);
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  const acceptPost = (post: DiscoursePost) => {
    const raw = JSON.stringify({ id: `${post.id}` });

    const requestOptions = {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow' as const,
    };

    return pipe(
      request(`${api.baseUrl}/solution/accept`, requestOptions),
      Effect.flatMap(jsonBody),
      Effect.map((x) => decodeOperationSuccessResponse(x)),
      Effect.flatMap((pr) =>
        Either.isRight(pr) ? Effect.succeed(pr.right) : Effect.fail(pr.left)
      )
    );
  };
  return acceptPost;
};
