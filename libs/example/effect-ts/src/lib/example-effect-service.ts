// borrowed and annotated from https://github.com/Effect-TS/core/blob/main/packages/core/_examples/layers.ts

import { Effect, Layer, Context, pipe } from '@neo4j-cc/prelude';

export interface ConsoleService {
  readonly log: (message: string) => Effect.Effect<never, never, void>;
}

export const ConsoleService = Context.Tag<ConsoleService>();

/**
 * A Layer.Layer<never, never, ConsoleService>
 * which needs nothing, never fails, and provides a ConsoleService
 */
export const LiveConsoleService = Layer.effect(
  ConsoleService, // construct a layer for a ConsoleService Tag to express the provided service
  // provide an implementation of the ConsoleService interface as an Effect result
  Effect.sync<ConsoleService>(() => ({
    log: (message: string) =>
      Effect.sync(() => {
        console.log(message);
      }),
  }))
);

export interface LoggerService {
  readonly info: (message: string) => Effect.Effect<never, never, void>;
}

export const LoggerService = Context.Tag<LoggerService>();

export const LiveLoggerService = Layer.effect(
  LoggerService,
  Effect.gen(function* ($) {
    const { log } = yield* $(Effect.service(ConsoleService));
    return {
      info: (message) => log(`info: ${message}`),
    };
  })
);

export const LiveApp = pipe(
  LiveConsoleService,
  Layer.provideMerge(LiveLoggerService)
);

export interface NameService {
  readonly getName: () => Effect.Effect<never, never, string>;
}

export const NameService = Context.Tag<NameService>();

export const LiveNameService = Layer.effect(
  NameService, // construct a layer from the ConsoleService Tag to express the required environment
  // provide an implementation of the ConsoleService interface
  Effect.sync(() => ({
    getName: () => Effect.succeed('ABK'), // an effect which never fails, always succeeds returning a constant value
  }))
);
