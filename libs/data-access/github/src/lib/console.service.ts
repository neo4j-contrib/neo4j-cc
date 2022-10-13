// An example service, copied from https://github.com/Effect-TS/core/blob/main/packages/core/_examples/layers.ts
import * as T from "@effect/core/io/Effect"
import * as L from "@effect/core/io/Layer"
import { pipe } from "@tsplus/stdlib/data/Function"
import { Tag } from "@tsplus/stdlib/service/Tag"

export interface ConsoleService {
  readonly log: (message: string) => T.Effect<never, never, void>
}

export const ConsoleService = Tag<ConsoleService>()

export const LiveConsoleService = L.fromEffect(ConsoleService)(
  T.sync(() => ({
    log: (message: string) => 
    T.sync(() => {
      console.log(message)
    })
  }))
)

export interface LoggerService {
  readonly info: (message: string) => T.Effect<never, never, void>
}

export const LoggerService = Tag<LoggerService>()

export const LiveLoggerService = L.fromEffect(LoggerService)(
  T.gen(function*($) {
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
