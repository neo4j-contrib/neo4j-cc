import '@relmify/jest-fp-ts';

import * as FC from "fast-check"

import * as T from "@effect-ts/core/Effect"
import * as S from "@effect-ts/schema";
import * as E from "@effect-ts/core/Either"

import * as Arbitrary from "@effect-ts/schema/Arbitrary";
import * as Parser from "@effect-ts/schema/Parser";

import { IsoDate } from './datetime.model';

describe("datetime", () => {

  it("arbitrary date", async () => {
    const parse = Parser.for(IsoDate)["|>"](S.condemnFail)
    const arbitraryDate = Arbitrary.for(IsoDate)
    FC.assert(FC.asyncProperty(arbitraryDate(FC), async (d) => {
      const result = await T.runPromise(T.either(parse(d.toISOString())))
      return E.isRight(result)
      }
    ))
  })
  
})