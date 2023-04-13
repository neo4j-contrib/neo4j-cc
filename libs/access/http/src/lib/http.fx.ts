import fetch from 'cross-fetch';

import {
  pipe,
  Effect,
  Context,
  Either,
  Duration,
  Schedule,
  Layer
} from '@neo4j-cc/prelude';
import {
  FetchError,
  HttpError,
  JsonBodyError,
  BufferBodyError,
} from './http-errors';
import { request } from './data-access-http';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HttpService {
  readonly request: (
    input: RequestInfo,
    init?: RequestInit
  ) => Effect.Effect<never, FetchError | HttpError, Response>;
  // readonly jsonBody: (input: Response) => Effect.Effect<never, JsonBodyError, unknown>
  // readonly bufferBody: (input: Response) => Effect.Effect<never, BufferBodyError, unknown>
}

export const HttpService = Context.Tag<HttpService>();

export const defaultRetrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed()),
  Schedule.whileOutput(Duration.lessThanOrEqualTo(Duration.seconds(30)))
);


export const LiveHttpService = Layer.succeed(HttpService, { request });
