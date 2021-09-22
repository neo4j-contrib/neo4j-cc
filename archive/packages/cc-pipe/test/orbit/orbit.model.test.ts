import '@relmify/jest-fp-ts';

import { pipe } from "@effect-ts/core";
// import * as T from "@effect-ts/core/Effect";
import * as E from "@effect-ts/core/Either";
import * as Sync from "@effect-ts/core/Sync";

import * as L from "@effect-ts/monocle/Lens";
import { decode, decoder, report } from "@effect-ts/morphic/Decoder";

import * as fc from "fast-check"
import {arbitrary} from "@effect-ts/morphic/FastCheck";
import { guard } from "@effect-ts/morphic/Guard";
import { equal } from "@effect-ts/morphic/Equal";
import { strict } from "@effect-ts/morphic/Strict";

import { OrbitUser } from "../../src/http/orbit/orbit.model";
import exampleOrbitResponse from "./responses/orbit-user.json";

describe("FastCheck OrbitUser", () => {

  const exampleOrbitUserData = exampleOrbitResponse.data;

  it("Generate and Guard", () => {
    const apiObjectTypeLens = pipe(OrbitUser.lens, L.prop("type"))
    
    fc.assert(
      fc.property(
        arbitrary(OrbitUser),
        (p) => {
          return guard(OrbitUser).is(p) && 
            (typeof apiObjectTypeLens.get(p) === "string") && 
            (apiObjectTypeLens.get(p) === "user")
        }
      )
    )
  })

  it("Fails to Decode", () => {
    expect(
      Sync.runEither(
        decoder(OrbitUser).decode({ nosuchthing: "unicorn" }),
      )
    ).toBeLeft()
  })

  it("Decodes", () => {
    expect(
      Sync.runEither(
        decoder(OrbitUser).decode(exampleOrbitUserData),
      )
    ).toBeRight()
  })

  it("Track fields", () => {
    expect(
      Sync.runEither(report(decode(OrbitUser)({ 
        id: "1610",
        type: "user",
        attributes: {
          name: 42,
          updated_at: "2021-04-19T18:48:05.716Z",
          created_at: "2021-03-16T11:56:03.296Z",
          email: "andreas.kollegger@neotechnology.com"
        }
      })))
    ).toEqual(
      E.left([
        "Expecting String at attributes.name but instead got: 42 (number is not a string)"
      ])
    )
  })

  it("Removes unknown fields", () => {
    expect(
      pipe(
        decoder(OrbitUser).decode(exampleOrbitUserData),
        Sync.map(o => Object.assign({nosuchfield:"blue 42"}, o)),
        Sync.chain(o => strict(OrbitUser).shrink(o)),
        Sync.runEither
      )
    ).toEqual(E.right(exampleOrbitUserData))
  })

  it("Has optics for peering into the data", () => {
    const aLens = pipe(OrbitUser.lens, 
      L.prop("attributes"), L.prop("name"),
      L.get
    )
    const result = Sync.runEither(
      pipe(
      decoder(OrbitUser).decode(exampleOrbitUserData),
      Sync.map(aLens)
    ))
    expect(result).toBeRight();
  })

  it("Uses Equal", () => {
    const o:OrbitUser = { id:"abk", type:"user", attributes: { name: "Andreas Kollegger", updated_at: "2020-01-01", created_at: "2021-01-01", email: "a@bk" } };
    expect(
      equal(OrbitUser).equals(
        o,
        { id:"abk", type:"user", attributes: { name: "Andreas Kollegger", updated_at: "2020-01-01", created_at: "2021-01-01", email: "a@bk" } },
      )
    ).toEqual(true)
    expect(
      equal(OrbitUser).equals(
        o,
        { id:"notabk", type:"user", attributes: { name: "Andreas Kollegger", updated_at: "2020-01-01", created_at: "2021-01-01", email: "a@bk" } },
      )
    ).toEqual(false)
  })
})