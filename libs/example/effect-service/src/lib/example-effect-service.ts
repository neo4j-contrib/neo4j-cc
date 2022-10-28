// borrowed and annotated from https://github.com/Effect-TS/core/blob/main/packages/core/_examples/layers.ts

import { E, L, Tag, pipe } from "@neo4j-cc/prelude"

export interface ConsoleService {
  readonly log: (message: string) => E.Effect<never, never, void>
}

export const ConsoleService = Tag<ConsoleService>()

export const LiveConsoleService = 
  L.fromEffect(ConsoleService) // construct a layer from the tagged ConsoleService
  ( // provide an implementation of the ConsoleService interface
    E.sync(() => ({
      log: (message: string) =>
        E.sync(() => {
          console.log(message)
        })
    }))
  )

export interface LoggerService {
  readonly info: (message: string) => E.Effect<never, never, void>
}

export const LoggerService = Tag<LoggerService>()

export const LiveLoggerService = 
  L.fromEffect(LoggerService)
  (
    E.gen(function*($) {
      const { log } = yield* $(ConsoleService)
      return {
        info: (message) => log(`info: ${message}`)
      }
    })
  )

export const LiveApp = pipe(
  LiveConsoleService,
  L.provideToAndMerge(LiveLoggerService)
)