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

import { OrbitActivity } from "../../src/http/orbit/orbit.model";
import exampleOrbitResponse from "./responses/orbit-activities_for_workspace.json";

describe("FastCheck OrbitActivity", () => {

  const exampleOrbitActivityData = exampleOrbitResponse.data[0];
  const anOrbitActivity:OrbitActivity = { 
    id: "1610",
    type: "some_activity",
    attributes: {
      action: "happened",
      created_at: "2021-03-31T13:25:49.716Z",
      key: "example/happened@2010-02-10T15:23:02Z",
      occurred_at: "2010-02-10T15:23:02.000Z",
      updated_at: "2021-03-31T13:25:49.716Z",
      type: "SomeActivity",
      tags: [
        "tagA",
        "tagB",
        "tagC"
      ],
      orbit_url: "https://app.orbit.love/neo4j-community/activities/11607575",
      weight: "0.5",
      activity_link: "https://example.com/something/happened/here",
      g_starred_at: "2010-02-10T15:23:02.000Z"
    },
    relationships: {
      activity_type: {
        data: {
          id: "3",
          type: "activity_type"
        }
      },
      member: {
        data: {
          id: "2962798",
          type: "member"
        }
      },
      repository: {
        data: {
          id: "25320",
          type: "repository"
        }
      }
    }

  };

  it("Generate and Guard", () => {
    const apiObjectTypeLens = pipe(OrbitActivity.lens, L.prop("type"))
    
    fc.assert(
      fc.property(
        arbitrary(OrbitActivity),
        (p) => {
          return guard(OrbitActivity).is(p) && 
            (typeof apiObjectTypeLens.get(p) === "string") 
        }
      )
    )
  })

  it("Fails to Decode", () => {
    expect(
      Sync.runEither(
        decoder(OrbitActivity).decode({ nosuchthing: "unicorn" }),
      )
    ).toBeLeft()
  })

  it("Decodes", () => {
    expect(
      Sync.runEither(
        decoder(OrbitActivity).decode(exampleOrbitActivityData),
      )
    ).toBeRight()
  })

  it("Decodes an array", async () => {
    const activityTypes = exampleOrbitResponse.data;
    const result = Sync.runEither(
      pipe(
        activityTypes,
        decode(make((F) => F.array(OrbitActivity(F)))),
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
        action: 42,
      }
    };

    expect(
      Sync.runEither(report(decode(OrbitActivity)(hasBrokenField)))
    ).toEqual(
      E.left([
        "Expecting String at attributes.action but instead got: 42 (number is not a string)",
        "Expecting String at attributes.activity_link but instead got: undefined (undefined is not a string)",
        "Expecting String at attributes.created_at but instead got: undefined (undefined is not a string)",
        "Expecting String at attributes.g_starred_at but instead got: undefined (undefined is not a string)",
        "Expecting String at attributes.key but instead got: undefined (undefined is not a string)",
        "Expecting String at attributes.occurred_at but instead got: undefined (undefined is not a string)",
        "Expecting String at attributes.orbit_url but instead got: undefined (undefined is not a string)",
        "Expecting Array at attributes.tags but instead got: undefined (undefined is not an array)",
        "Expecting String at attributes.type but instead got: undefined (undefined is not a string)",
        "Expecting String at attributes.updated_at but instead got: undefined (undefined is not a string)",
        "Expecting String at attributes.weight but instead got: undefined (undefined is not a string)",
        "Expecting Record at relationships but instead got: undefined (undefined is not a record)",
      ])
    )
  })

  it("Removes unknown fields", () => {
    expect(
      pipe(
        decoder(OrbitActivity).decode(exampleOrbitActivityData),
        Sync.map(o => Object.assign({nosuchfield:"blue 42"}, o)),
        Sync.chain(o => strict(OrbitActivity).shrink(o)),
        Sync.runEither
      )
    ).toEqual(E.right(exampleOrbitActivityData))
  })

  it("Has optics for peering into the data", () => {
    const aLens = pipe(OrbitActivity.lens, 
      L.prop("attributes"), L.prop("action"),
      L.get
    )
    const result = Sync.runEither(
      pipe(
      decoder(OrbitActivity).decode(exampleOrbitActivityData),
      Sync.map(aLens)
    ))
    expect(result).toBeRight();
  })

  it("Uses Equal", () => {
    const sameThing:OrbitActivity = Object.assign(anOrbitActivity);
    const differentThing = pipe(
      OrbitActivity.lens,
      L.prop("attributes"), L.prop("action"),
      L.modify(() => "imagined")
    )(anOrbitActivity);
    expect(
      equal(OrbitActivity).equals(
        sameThing,
        anOrbitActivity,
      )
    ).toEqual(true)
    expect(
      equal(OrbitActivity).equals(
        differentThing,
        anOrbitActivity,
      )
    ).toEqual(false)
  })
})