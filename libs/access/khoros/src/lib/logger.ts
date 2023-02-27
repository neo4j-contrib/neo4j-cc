import { Effect } from '@neo4j-cc/prelude';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface LoggerService
//   extends Effect.Effect.Success<typeof makeLoggerService> {}

// export const loggerService = Service.Tag<LoggerService>();

// const logMessage = (message: string) => Effect.succeed(() => console.log(message));

// export const makeLoggerService = pipe(
//   Effect.Do(),
//   Effect.bindValue("log", () => logMessage)
// )

// export const loggerServiceContext =
//   Effect.toLayer(loggerService)(makeLoggerService);
