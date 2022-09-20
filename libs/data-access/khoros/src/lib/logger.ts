import * as Effect from "@effect/core/io/Effect";
import { Service } from "@tsplus/stdlib/service/Service";
import { pipe } from "@tsplus/stdlib/data/Function";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoggerService
  extends Effect.Effect.Success<typeof makeLoggerService> {}

export const loggerService = Service.Tag<LoggerService>();

const logMessage = (message: string) => Effect.succeed(() => console.log(message));

export const makeLoggerService = pipe(
  Effect.Do(),
  Effect.bindValue("log", () => logMessage)
)

export const loggerServiceContext =
  Effect.toLayer(loggerService)(makeLoggerService);