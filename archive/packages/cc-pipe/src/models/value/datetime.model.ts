// tracing: off

import { pipe } from "@effect-ts/core/Function"

import * as S from "@effect-ts/schema"
import * as Th from "@effect-ts/schema/These"

import { DateTime } from "luxon";

export const dateIdentifier = Symbol.for("@neo4j-cc/pipe/values/date")

export const IsoDate: S.Schema<
  unknown,
  S.LeafE<S.ParseDateE>,
  Date,
  Date,
  never,
  string,
  {}
> = pipe(
  S.identity((u): u is Date => u instanceof Date),
  S.parser((u: unknown) => {
    if (typeof u !== "string" || u == null) {
      return Th.fail(S.leafE(S.parseDateE(u)))
    }
    try {
      const dt = DateTime.fromISO(u)
      if (dt) {
        return Th.succeed(dt.toJSDate())
      }
      return Th.fail(S.leafE(S.parseDateE(u + "ABK!")))
    } catch {
      return Th.fail(S.leafE(S.parseDateE(u + "oops")))
    }
  }),
  S.arbitrary((_) => _.date()),
  S.encoder((_) => _.toISOString()),
  S.mapApi((_) => ({})),
  S.identified(dateIdentifier, {})
)

export const dateMsIdentifier = Symbol.for("@effect-ts/schema/ids/dateMs")

export const dateMs: S.Schema<unknown, S.ParseDateMsE, Date, Date, never, number, {}> =
  pipe(
    IsoDate,
    S.parser((u) =>
      typeof u === "number" ? Th.succeed(new Date(u)) : Th.fail(S.parseDateMsE(u))
    ),
    S.encoder((_) => _.getTime()),
    S.mapApi((_) => ({})),
    S.identified(dateMsIdentifier, {})
  )