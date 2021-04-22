import '@relmify/jest-fp-ts';

import { pipe } from "@effect-ts/core";
import * as E from "@effect-ts/core/Either";
import * as X from "@effect-ts/core/XPure";
import * as Sync from "@effect-ts/core/Sync";

import * as L from "@effect-ts/monocle/Lens";
import { decode, decoder, report } from "@effect-ts/morphic/Decoder";

import * as fc from "fast-check"
import {arbitrary} from "@effect-ts/morphic/FastCheck";
import {guard,} from "@effect-ts/morphic/Guard";
import { strict } from "@effect-ts/morphic/Strict"

import { MediumResponse } from "../../src/models/medium.model";
import mediumSample from "./medium.sample.json";
 
const successLens = pipe(MediumResponse.lens, L.prop("success"))

const smallExample = MediumResponse.build({ 
  success: true,
  payload:{
    streamItems:[],
    references: {
      User: {
        abk: {
          type: "User",
          bio: "is abk",
          createdAt: 123,
          mediumMemberAt: 19690107,
          name: "ABK",
          twitterScreenName: "akollegger",
          userId: "abk",
          username:"abk"
        }
      },
      Post: {
        gram: {
          type: "Post",
          canonicalUrl: "",
          createdAt: 20200202,
          creatorId: "abk",
          firstPublishedAt: 20200202,
          id: "gram-for-graphs",
          latestPublishedAt: 20200202,
          mediumUrl: "",
          slug: "",
          title: "Gram for Graphs",
          uniqueSlug: "gram-for-graphs-cafe42",
          updatedAt: 20200202,
          versionId: "abcd1234",
          webCanonicalUrl: ""
        }
      }
    }
  } 
})

describe("FastCheck MediumResponse", () => {
  it("Generate and Guard", () => {
    fc.assert(
      fc.property(
        arbitrary(MediumResponse),
        (p) => {
          return guard(MediumResponse).is(p) && (typeof successLens.get(p) === "boolean")
        }
      )
    )
  })

  it("Guards wider objects", () => {
    expect(guard(MediumResponse).is(mediumSample)).toBeTruthy();
  })

  it("Fails to Decode", () => {
    expect(
      E.isLeft(
        X.runEither(
          decoder(MediumResponse).decode({ success: "bar" }),
        )
      )
    ).toBeTruthy()
  })

  it("Decodes", () => {
    expect(
      E.isRight(
        X.runEither(
          decoder(MediumResponse).decode(mediumSample),
        )
      )
    ).toBeTruthy()
  })

  it("Track fields", () => {
    expect(
      X.runEither(report(decode(MediumResponse)({ 
        success: 42, 
        payload:{
          streamItems:[],
          references: {
            User: {},
            Post: {}
          }
        } 
      })))
    ).toEqual(
      E.left([
        "Expecting Boolean at success but instead got: 42 (number is not a boolean)"
      ])
    )
  })

  it("Removes unknown fields", () => {
    expect(
      Sync.run(
        strict(MediumResponse).shrink(
          Object.assign(
            { whatsThis: "an unknown field"},
            smallExample
          )
        )
      )
    ).toEqual(smallExample)
  })

  it("Has optics for peering into the data", () => {
    const userLens = pipe(MediumResponse.lens, 
      L.prop("payload"), L.prop("references"), L.prop("User"),
      L.get
    )
    const postLens = pipe(MediumResponse.lens, 
      L.prop("payload"), L.prop("references"), L.prop("Post"),
      L.get
    )
    expect(userLens(smallExample)).toBeDefined();
    expect(postLens(smallExample)).toBeDefined();
  })
})