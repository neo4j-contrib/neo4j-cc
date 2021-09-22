import '@relmify/jest-fp-ts';

import { DateTime } from "luxon";

// import {pipe} from "@effect-ts/core/Function"
import * as T from "@effect-ts/core/Effect"
import * as E from "@effect-ts/core/Either"
import * as A from "@effect-ts/core/Collections/Immutable/Array";
import {some} from "@effect-ts/core/Option";

import * as FC from "fast-check"

import * as S from "@effect-ts/schema";
import * as Arbitrary from "@effect-ts/schema/Arbitrary";
import * as Parser from "@effect-ts/schema/Parser";
import * as Encoder from "@effect-ts/schema/Encoder";

import * as D from "../../src/values/datetime";

describe("DateTime values", () => {
  it("dayRange can be a contiguous series of days", () => {
    const start = DateTime.fromISO("2001-01-01");
    const end = DateTime.fromISO("2001-02-01");
    const aMonthOfDays = D.dayRange(start, end);
    const days = A.from(aMonthOfDays);
    expect(A.head(days)).toEqual(some(start));
    expect(A.last(days)).toEqual(some(end.minus({days:1})));
    expect(days.length).toBe(end.diff(start, "days").days)
  })
})

describe("datetime", () => {

  it("date", async () => {
    const date = new Date().toISOString()
    const parse = Parser.for(S.date)["|>"](S.condemnFail)
    const res_ok = await T.runPromise(T.either(parse(date)))
    expect(res_ok).toEqual(E.right(new Date(date)))
    const res_bad = await T.runPromise(T.either(parse("bad date")))
    expect(res_bad).toBeLeft();
    if (E.isLeft(res_bad)) {
      expect(res_bad.left).toEqual(
        new S.CondemnException({
          message: 'cannot process "bad date", expected a date string'
        })
      )
    }
    const newDate = new Date()
    const encodeDate = Encoder.for(S.date)
    expect(encodeDate(newDate)).toEqual(newDate.toISOString())
  })

  it("arbitrary", async () => {
    const parse = Parser.for(S.date)["|>"](S.condemnFail)
    const arbitraryDate = Arbitrary.for(S.date)
    FC.assert(FC.asyncProperty(arbitraryDate(FC), async (d) => {
      const result = await T.runPromise(T.either(parse(d)))
      return E.isRight(result)
      }
    ))
  })
})