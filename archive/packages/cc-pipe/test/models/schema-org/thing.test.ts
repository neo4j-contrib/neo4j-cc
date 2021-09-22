import '@relmify/jest-fp-ts';

import {pipe} from "@effect-ts/core/Function"
import * as T from "@effect-ts/core/Effect"

import * as FC from "fast-check"

import * as S from "@effect-ts/schema";
// import * as Arbitrary from "@effect-ts/schema/Arbitrary";
import * as Parser from "@effect-ts/schema/Parser";

import * as L from "@effect-ts/monocle/Lens"
import * as O from "@effect-ts/monocle/Optional"

import {Thing} from "./thing.model"
import { Identifier } from '../value';

const parseJsonThing = S.jsonString[">>>"](Thing)["|>"](Parser.for)["|>"](S.condemnFail)
const parseLiteralThing = Thing.Parser["|>"](S.condemnFail)
const createThing = Thing.Constructor["|>"](S.condemnFail)
// const arbitraryThing = Arbitrary.for(Thing)(FC)
const arbitraryThing = Thing.Arbitrary(FC)
const guardThing = Thing.Guard

const acceptableValues = {
  identifier: "0xc001caf3",
  url: "https://github.com/akollegger",
  name: "ABK",
}

describe("Model<Thing>", () => {

  it("parses json", async () => {
    const result = await T.runPromise(
      T.either(
        parseJsonThing("this is not valid json")
      )
    )
    expect(result).toBeLeft();

    const result2 = await T.runPromise(
      T.either(
        parseJsonThing('{ "validJson":true, "acceptableThing":false }')
      )
    )
    expect(result2).toBeLeft();
  })

  it("parses literal", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralThing({
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
        parseLiteralThing({
          name: "ABK",
        })
      )
    )
    expect(result).toEqualLeft(new S.CondemnException({
      message: "1 error(s) found while processing an intersection\n"
             + "└─ 1 error(s) found while processing member 0\n"
             + "   └─ 1 error(s) found while checking keys\n"
             + "      └─ missing required key \"identifier\""
    }));
  })
  it("constructs", async () => {
    const result = await T.runPromise(
      T.either(
        createThing({
          identifier: Identifier(acceptableValues.identifier)
        }),
      ),
    )
    expect(result).toBeRight()
  })
  it("arbitrary", () => {
    FC.assert(FC.property(arbitraryThing, guardThing))
  })


  it("parse literal with optionals", async () => {
    const nameLens = pipe(
      L.id<Thing>(),
      L.asOptional,
      O.prop("name")
    )
    const urlLens = pipe(
      L.id<Thing>(),
      L.asOptional,
      O.prop("url")
    )
    FC.assert(
      FC.asyncProperty(arbitraryThing, async (t) => {
        const result = await T.runPromise(
          parseLiteralThing(t)
        )
        expect(nameLens.getOption(result)).toBeSome()
        expect(urlLens.getOption(result)).toBeSome()
        expect(Thing.Guard(result)).toBeTruthy()
      })
    )
  })


})