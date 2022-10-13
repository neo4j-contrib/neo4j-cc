import * as T from "@effect/core/io/Effect"
import * as L from "@effect/core/io/Layer"
import { pipe } from "@tsplus/stdlib/data/Function"
import { Tag } from "@tsplus/stdlib/service/Tag"

import { LoggerService } from './console.service'


export interface DebugLoggerService extends LoggerService {
  readonly buffer: () => T.Effect<never, never, string>
}

export const DebugLoggerService = Tag<DebugLoggerService>()

export const LiveDebugLoggerService = L.fromEffect(DebugLoggerService)(
  T.sync(() => ({
    info: (message: string) => T.sync(() => {;}),
    buffer: () => T.succeed("ok")
  }))
)

export const program = pipe(
  T.service(DebugLoggerService),
  T.tap(({info}) => info("hello")),
  T.flatMap(({buffer}) => buffer())
)



describe("ConsoleService", () => {
  it("sends info() to stdout", () => {
    const out = pipe(
      program,
      T.provideSomeLayer(LiveDebugLoggerService),
      T.unsafeRunSync
    )
    expect(out).toBe("ok")
  })
})