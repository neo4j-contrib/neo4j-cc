import fetch from 'cross-fetch';

import * as Effect from "@effect/core/io/Effect";
import * as Metrics from "@effect/core/io/Metrics";
import * as Schedule from "@effect/core/io/Schedule";
import * as Duration from "@tsplus/stdlib/data/Duration";
import * as Either from "@tsplus/stdlib/data/Either";
import { pipe } from "@tsplus/stdlib/data/Function";
import { Service } from "@tsplus/stdlib/service/Service";

export class HttpError {
  readonly _tag = "HttpError";
  readonly response;
  constructor(response:Response) {
    this.response = {
      url: response.url,
      status: response.status,
      statusText: response.statusText
    }
  }
}

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const httpRequestCount = pipe(
  Metrics.counter("HttpRequest"),
  Metrics.fromConst(() => 1)
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HttpService
  extends Effect.Effect.Success<typeof makeHttpService> {}

export const httpService = Service.Tag<HttpService>();

const requestHttp = (input: RequestInfo, init?: RequestInit) =>
  pipe(
    Effect.asyncInterrupt<never, FetchError | HttpError, Response>((resume) => {
      const controller = new AbortController();
      fetch(input, { ...(init ?? {}), signal: controller.signal })
        .then((response) => {
          // console.log(input,init,response)
          if (response.ok) {
              resume(Effect.succeed(response))
          } else {
            resume(Effect.fail(new HttpError(response)))
          }
          // resume(Effect.succeed(() => response));
        })
        .catch((error) => {
          resume(Effect.fail(new FetchError(error)));
        });
      return Either.left(
        Effect.succeed(() => {
          controller.abort();
        })
      );
    }),
    httpRequestCount
  );

const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );


const defaultRetrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

export const makeHttpService = pipe(
  Effect.Do(),
  Effect.bindValue("request", () => requestHttp),
  Effect.bindValue("jsonBody", () => jsonBody),
  Effect.bindValue("defaultRetrySchedule", () => defaultRetrySchedule)
)



export const httpServiceContext = Effect.toLayer(httpService)(makeHttpService);
