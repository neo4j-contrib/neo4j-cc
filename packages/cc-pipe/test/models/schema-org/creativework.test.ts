import '@relmify/jest-fp-ts';

import {pipe} from "@effect-ts/core/Function"
import * as T from "@effect-ts/core/Effect"

import * as FC from "fast-check"

import * as S from "@effect-ts/schema";
// import * as Arbitrary from "@effect-ts/schema/Arbitrary";
import * as Parser from "@effect-ts/schema/Parser";

import * as L from "@effect-ts/monocle/Lens"
import * as O from "@effect-ts/monocle/Optional"

import {CreativeWork} from "./creativework.model"
import { Identifier } from '../value';

const parseJsonCreativeWork = S.jsonString[">>>"](CreativeWork)["|>"](Parser.for)["|>"](S.condemnFail)
const parseLiteralCreativeWork = CreativeWork.Parser["|>"](S.condemnFail)
const createCreativeWork = CreativeWork.Constructor["|>"](S.condemnFail)
const arbitraryCreativeWork = CreativeWork.Arbitrary(FC)
const guardCreativeWork = CreativeWork.Guard

const acceptableValues = {
  identifier: "0xc001caf3",
  url: "https://github.com/akollegger",
  name: "ABK",
}

describe("Model<CreativeWork>", () => {

  it("parses json", async () => {
    const result = await T.runPromise(
      T.either(
        parseJsonCreativeWork("this is not valid json")
      )
    )
    expect(result).toBeLeft();

    const result2 = await T.runPromise(
      T.either(
        parseJsonCreativeWork('{ "validJson":true, "acceptableCreativeWork":false }')
      )
    )
    expect(result2).toBeLeft();
  })

  it("parses literal", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralCreativeWork({
          identifier: acceptableValues.identifier,
          name: acceptableValues.name,
          url: acceptableValues.url,
        })
      )
    )
    expect(result).toBeRight();
  })
  it("parses with failures", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralCreativeWork({
          name: "ABK",
        })
      )
    )
    expect(result).toEqualLeft(new S.CondemnException({
      message: "1 error(s) found while processing an intersection\n"
            +  "└─ 1 error(s) found while processing member 1\n"
            +  "   └─ 1 error(s) found while processing an intersection\n"
            +  "      └─ 1 error(s) found while processing member 0\n"
            +  "         └─ 1 error(s) found while checking keys\n"
            +  "            └─ missing required key \"identifier\""
    }));
  })
  it("constructs", async () => {
    const result = await T.runPromise(
      T.either(
        createCreativeWork({
          identifier: Identifier(acceptableValues.identifier)
        }),
      ),
    )
    expect(result).toBeRight()
  })
  it("arbitrary", async () => {
    FC.assert(FC.property(arbitraryCreativeWork, guardCreativeWork))
  })


  it("parse literal with optionals", async () => {
    const nameLens = pipe(
      L.id<CreativeWork>(),
      L.asOptional,
      O.prop("name")
    )
    const urlLens = pipe(
      L.id<CreativeWork>(),
      L.asOptional,
      O.prop("url")
    )
    FC.assert(
      FC.asyncProperty(arbitraryCreativeWork, async (t) => {
        const result = await T.runPromise(
          // TODO: parse the json because the literal parse fails on dates. why?
          parseJsonCreativeWork(JSON.stringify(t))
        )
        expect(nameLens.getOption(result)).toBeSome()
        expect(urlLens.getOption(result)).toBeSome()
        expect(CreativeWork.Guard(result)).toBeTruthy()
      })
    )
  })


})