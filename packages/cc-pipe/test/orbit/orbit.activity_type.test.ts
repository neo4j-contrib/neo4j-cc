import '@relmify/jest-fp-ts';

import { pipe } from "@effect-ts/core";
// import * as T from "@effect-ts/core/Effect";
import * as E from "@effect-ts/core/Either";
import * as Sync from "@effect-ts/core/Sync";
// import * as Chunk from "@effect-ts/core/Collections/Immutable/Chunk";
// import * as A from "@effect-ts/core/Collections/Immutable/Array";

import * as L from "@effect-ts/monocle/Lens";
import { decode, decoder, report } from "@effect-ts/morphic/Decoder";

import * as fc from "fast-check"
import {arbitrary} from "@effect-ts/morphic/FastCheck";
import { guard } from "@effect-ts/morphic/Guard";
import { equal } from "@effect-ts/morphic/Equal";
import { strict } from "@effect-ts/morphic/Strict";
import { make } from "@effect-ts/morphic"

import { OrbitActivityType } from "../../src/http/orbit/orbit.model";
import exampleOrbitResponse from "./responses/orbit-activity_types.json";

describe("FastCheck OrbitActivityType", () => {

  const exampleOrbitActivityTypeData = exampleOrbitResponse.data[0];
  const anOrbitActivityType:OrbitActivityType = { 
    id: "1610",
    type: "activity_type",
    attributes: {
      name: "Dance Like Nobody Is Watching",
      short_name: "dance",
      key: "dance:madly",
      category: "dance",
      weight: "0.9"
    }
  };

  it("Generate and Guard", () => {
    const apiObjectTypeLens = pipe(OrbitActivityType.lens, L.prop("type"))
    
    fc.assert(
      fc.property(
        arbitrary(OrbitActivityType),
        (p) => {
          return guard(OrbitActivityType).is(p) && 
            (typeof apiObjectTypeLens.get(p) === "string") && 
            (apiObjectTypeLens.get(p) === "activity_type")
        }
      )
    )
  })

  it("Fails to Decode", () => {
    expect(
      Sync.runEither(
        decoder(OrbitActivityType).decode({ nosuchthing: "unicorn" }),
      )
    ).toBeLeft()
  })

  it("Decodes", () => {
    expect(
      Sync.runEither(
        decoder(OrbitActivityType).decode(exampleOrbitActivityTypeData),
      )
    ).toBeRight()
  })

  it("Decodes an array", async () => {
    const activityTypes = exampleOrbitResponse.data;
    const result = Sync.runEither(
      pipe(
        activityTypes,
        decode(make((F) => F.array(OrbitActivityType(F)))),
      )
    )
    // console.log(result);
    expect(result).toBeRight();
  })

  it("Track fields", () => {
    const hasBrokenField = { 
      id: "1610",
      type: "activity_type",
      attributes: {
        name: 42,
        short_name: "dance",
        key: "dance:madly",
        category: "dance",
        weight: "0.9"
      }
    };

    expect(
      Sync.runEither(report(decode(OrbitActivityType)(hasBrokenField)))
    ).toEqual(
      E.left([
        "Expecting String at attributes.name but instead got: 42 (number is not a string)"
      ])
    )
  })

  it("Removes unknown fields", () => {
    expect(
      pipe(
        decoder(OrbitActivityType).decode(exampleOrbitActivityTypeData),
        Sync.map(o => Object.assign({nosuchfield:"blue 42"}, o)),
        Sync.chain(o => strict(OrbitActivityType).shrink(o)),
        Sync.runEither
      )
    ).toEqual(E.right(exampleOrbitActivityTypeData))
  })

  it("Has optics for peering into the data", () => {
    const aLens = pipe(OrbitActivityType.lens, 
      L.prop("attributes"), L.prop("name"),
      L.get
    )
    const result = Sync.runEither(
      pipe(
      decoder(OrbitActivityType).decode(exampleOrbitActivityTypeData),
      Sync.map(aLens)
    ))
    expect(result).toBeRight();
  })

  it("Uses Equal", () => {
    const sameThing:OrbitActivityType = Object.assign(anOrbitActivityType);
    const differentThing = pipe(
      OrbitActivityType.lens,
      L.prop("attributes"), L.prop("name"),
      L.modify(() => "Different Name")
    )(anOrbitActivityType);
    expect(
      equal(OrbitActivityType).equals(
        sameThing,
        anOrbitActivityType,
      )
    ).toEqual(true)
    expect(
      equal(OrbitActivityType).equals(
        differentThing,
        anOrbitActivityType,
      )
    ).toEqual(false)
  })
})