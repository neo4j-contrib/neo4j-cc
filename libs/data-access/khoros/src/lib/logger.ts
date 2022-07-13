import * as Effect from "@effect/core/io/Effect";
import { Service } from "@tsplus/stdlib/service/Service";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoggerService
  extends Effect.Effect.Success<typeof makeLoggerService> {}

export const loggerService = Service.Tag<LoggerService>();

export const makeLoggerService = Effect.succeed(() => {
  const log = (message: string) => Effect.succeed(() => console.log(message));

  return { log };
});

export const loggerServiceContext =
  Effect.toLayer(loggerService)(makeLoggerService);