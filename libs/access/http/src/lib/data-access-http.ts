import fetch from 'cross-fetch';

import { pipe, Effect, Schedule, Duration, Option } from '@neo4j-cc/prelude';
import {
  FetchError,
  JsonBodyError,
  BufferBodyError,
  HttpError,
} from './http-errors';

export const headersAsRecord = (headers: Headers) => {
  const asRecord = {} as Record<string, string>;
  headers.forEach((v, k) => (asRecord[k] = v));
  return asRecord;
};

export const getRetrySecondsOr = (
  retryAfter: string | null,
  otherwise: number
) =>
  pipe(
    retryAfter,
    Option.fromNullable,
    Option.map(Number.parseInt),
    Option.map((parsed) => (isNaN(parsed) ? otherwise : parsed)),
    Option.getOrElse(() => otherwise)
  );

export const isHttpTooManyRequests = (
  error: HttpError | FetchError
): error is HttpError =>
  error._tag === 'HttpError' && error.response.status === 429;

export const respectHttp429 = pipe(
  Schedule.once(),
  Schedule.contramap((error: HttpError | FetchError) =>
    isHttpTooManyRequests(error)
      ? Schedule.fromDelay(
          Duration.seconds(
            getRetrySecondsOr(error.response.headers.get('Retry-After'), 20)
          )
        )
      : Schedule.stop()
  )
);

export const defaultHttpSchedule = pipe(
  // Schedule.recurWhile((error: FetchError | HttpError) => {
  //   return (error._tag === "HttpError") && (error.response.status === 429) // only retry on "Too many requests" error
  // }),
  // Schedule.map( (error:HttpError | FetchError) => Schedule.stop()),

  Schedule.stop(),
  Schedule.contramap((error: HttpError | FetchError) =>
    isHttpTooManyRequests(error)
      ? Schedule.fromDelay(
          Duration.seconds(
            getRetrySecondsOr(error.response.headers.get('Retry-After'), 20)
          )
        )
      : pipe(
          Schedule.exponential(Duration.seconds(1), 2.0),
          Schedule.either(Schedule.spaced(Duration.seconds(10))),
          Schedule.compose(Schedule.elapsed()),
          Schedule.whileOutput(Duration.lessThanOrEqualTo(Duration.seconds(30)))
        )
  )
  // Schedule.whileInput((error: FetchError | HttpError) =>
  //   (error._tag === "HttpError") && (error.response.status === 429) // only retry on "Too many requests" error
  // ),)
  // ((error._tag === "HttpError") && (error.response.status === 429))
  //     ? Schedule.resetAfter(Duration.seconds(getRetrySecondsOr(error.response.headers.get('Retry-After'), 20)))
  //     : Schedule.stop()
  //   )
  // )
);

export const request = <R extends Response>(
  input: RequestInfo,
  init?: RequestInit | undefined
) =>
  pipe(
    Effect.tryCatchPromise(
      () => fetch(input, init),
      (error) => new FetchError({ error, input, init })
    ),
    Effect.flatMap((response) =>
      response.status >= 200 && response.status < 300
        ? Effect.succeed(response as R)
        : Effect.fail(new HttpError(response))
    ),
    Effect.retry(defaultHttpSchedule)
  );

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );

export const bufferBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<ArrayBuffer> => input.arrayBuffer(),
    (error) => new BufferBodyError(error)
  );
