import '@relmify/jest-fp-ts';

import { DateTime } from "luxon";
import * as A from "@effect-ts/core/Collections/Immutable/Array";
import {some} from "@effect-ts/core/Option";
import * as E from "@effect-ts/core/Either"
import * as Sync from "@effect-ts/core/Sync";
import { runDecode, decoder, decode, report } from "@effect-ts/morphic/Decoder"

import * as D from "../../src/values/datetime";

// import * as fc from "fast-check";
// import {arbitrary} from "@effect-ts/morphic/FastCheck";
// import { guard } from "@effect-ts/morphic/Guard";

import {Demo} from './datetime.demo';

describe("DateTime values", () => {
  it("dateRange can be a contiguous series of days", () => {
    const start = DateTime.fromISO("2001-01-01");
    const end = DateTime.fromISO("2001-02-01");
    const aMonthOfDays = D.dayRange(start, end);
    const days = A.from(aMonthOfDays);
    expect(A.head(days)).toEqual(some(start));
  })

})


describe("Morphic Extension", () => {

  it("should use extension", () => {    
    expect(runDecode(Demo)({ date: 0 })).toEqual(E.right({ date: new Date(0) }))
  })

  it("Decodes", () => {
    expect(
      Sync.runEither(
        decoder(Demo).decode({date:0}),
      )
    ).toBeRight()
  })

  it("Track fields", () => {
    const hasBrokenField = { 
      date: "today"
    };

    expect(
      Sync.runEither(report(decode(Demo)(hasBrokenField)))
    ).toEqual(
      E.left([
        "Expecting Milliseconds at date but instead got: \"today\" (string is not a number)"
      ])
    )
  })

  // it("Fast Check", () => {
    
  //   fc.assert(
  //     fc.property(
  //       arbitrary(Demo),
  //       (p) => {
  //         return guard(Demo).is(p)
  //       }
  //     )
  //   )
  // })

})