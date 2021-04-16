/**
 * The Effect Data Types: Effect
 * 
 * Testified examples from https://dev.to/matechs/the-effect-data-types-effect-1e3f
 */
 import { pipe } from "@effect-ts/core";
 import { tuple } from "@effect-ts/core/Function";
 import * as D from "@effect-ts/core/Collections/Immutable/Dictionary";
 import * as A from "@effect-ts/core/Collections/Immutable/Array";
 import * as E from "@effect-ts/core/Either";
 import * as T from "@effect-ts/core/Effect";
 import * as X from "@effect-ts/core/XPure";
 import * as Sync from "@effect-ts/core/Sync";

 import * as L from "@effect-ts/monocle/Lens";
 import { decode, decoder, report } from "@effect-ts/morphic/Decoder";

//  import * as M from "@effect-ts/core/Effect/Managed"
//  import * as Ref from "@effect-ts/core/Effect/Ref"
//  import * as Array from "@effect-ts/core/Collections/Immutable/Array";
//  import * as Map from "@effect-ts/core/Collections/Immutable/Map"
//  import type { NoSuchElementException } from "@effect-ts/system/GlobalExceptions"

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
    // const userIds = pipe(
    //   decoder(MediumResponse).decode(actualSample),
    //   T.map(userLens),
    //   T.map(s => Object.keys(s)),
    // )
    
    const program = pipe(
      T.do,
      T.bind("mr", () => decoder(MediumResponse).decode(mediumSample) ),
      T.bind("users", ({mr}) => T.succeed(userLens(mr)) ),
      T.bind("posts", ({mr}) => T.succeed(postLens(mr)) ),
      T.bind("postsWithAuthors", ({users, posts}) => T.succeed(
        pipe(posts, 
          D.values, 
          A.map(p => tuple(p,users[p.creatorId]))
        )
      )),
      T.map( ({postsWithAuthors}) => postsWithAuthors)
    )

    pipe(program, T.chain((result) => 
          T.effectTotal(() => {
            console.log(result)
          })
    ), T.run)
  })
})