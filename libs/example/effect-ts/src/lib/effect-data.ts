import * as Data from "@effect/data/Data"

export interface SomeError extends Data.Case {
  readonly _tag: "SomeError"
  readonly error: string
}

export const SomeError = Data.tagged<SomeError>("SomeError")

export const anError = SomeError({ error: "ok" })
