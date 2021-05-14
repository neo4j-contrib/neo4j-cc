import '@relmify/jest-fp-ts';

import {pipe} from "@effect-ts/core/Function"
import * as T from "@effect-ts/core/Effect"

import * as FC from "fast-check"

import * as S from "@effect-ts/schema";
import * as Arbitrary from "@effect-ts/schema/Arbitrary";
import * as Parser from "@effect-ts/schema/Parser";
import { Model } from "@effect-ts/schema";
import * as Chunk from "@effect-ts/core/Collections/Immutable/Chunk"

interface ColorBrand {
  readonly ColorBrand: unique symbol
}
type Color = S.ParsedShapeOf<typeof Color_> & ColorBrand
const Color_ = S.literal("red", "blue", "green")
const Color = Color_["|>"](S.brand<Color>())
const arbitraryColor = Arbitrary.for(Color)(FC)

interface IdBrand {
  readonly IdBrand: unique symbol
}
type Id = S.Int & S.Positive & IdBrand
const Id = S.positiveInt["|>"](S.brand<Id>())

interface NameBrand {
  readonly NameBrand: unique symbol
}
type Name = S.NonEmptyString & NameBrand
const Name = S.nonEmptyString["|>"](S.brand<Name>())

class Address extends Model<Address>()(
  pipe(
    S.required({
      street: S.string,
      city: S.string
    })
  )
) {}

const createAddress = Address.Constructor["|>"](S.condemnFail)

class Person extends Model<Person>()(
  pipe(
    S.required({
      id: Id,
      name: Name,
      addresses: S.chunk(Address),
    }),
  )
) {}


// just schema...
// interface Person extends S.ParsedShapeOf<typeof Person_> {}
// const Person_ = S.struct({
//   required: {
//     id: Id,
//     name: Name,
//   },
//   optional: {
//     addresses: S.chunk(Address)
//   }
// }) ["|>"](S.named("Person"))
// const Person = Person_["|>"](S.brand<Person>())


const parseJsonPerson = S.jsonString[">>>"](Person)["|>"](Parser.for)["|>"](S.condemnFail)
const parseLiteralPerson = Person.Parser["|>"](S.condemnFail)
const createPerson = Person.Constructor["|>"](S.condemnFail)
// const arbitraryPerson = Arbitrary.for(Person)(FC)
const arbitraryPerson = Person.Arbitrary(FC)
const guardPerson = Person.Guard

describe("Model<Person>", () => {

  it("parses json", async () => {
    const result = await T.runPromise(
      T.either(
        parseJsonPerson("foo")
      )
    )
    expect(result).toBeLeft();
  })

  it("parses literal", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralPerson({
          id: 0,
          name: "ABK",
          addresses: [{
            street: "1609 Lancaster Street",
            city: "Baltimore"
          }]
        })
      )
    )
    expect(result).toBeRight();
  })
  it("parses with failures", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralPerson({
          name: "ABK",
          addresses: [{
            street: "1609 Lancaster Street",
            city: "Baltimore"
          }]
        })
      )
    )
    expect(result).toEqualLeft(new S.CondemnException({
      message: "1 error(s) found while checking keys\n" +
               "└─ missing required key \"id\"",
    }));
  })
  it("constructs", async () => {
    const result = await T.runPromise(pipe(
      createAddress({
        street:"1609 Lancaster",
        city:"Baltimore"}),
      T.chain(a => 
        createPerson({
          id: Id(0),
          name: Name("ABK"),
          addresses: Chunk.from([a])
        })
      ),
      T.either
    ))
    expect(result).toBeRight()
  })
  it("arbitrary", () => {
    FC.assert(FC.property(arbitraryPerson, guardPerson))
  })


  it("matchW/matchS", () => {
    FC.assert(
      FC.property(arbitraryColor, (c) => {
        expect(["R", "B", "G"]).toContain(
          Color.Api.matchW({
            red: () => "R" as const,
            green: () => "B" as const,
            blue: () => "G" as const
          })(c)
        )
        expect(["R", "G", "B"]).toContain(
          Color.Api.matchS({
            red: () => "R",
            green: () => "B",
            blue: () => "G"
          })(c)
        )
      })
    )
  })
})