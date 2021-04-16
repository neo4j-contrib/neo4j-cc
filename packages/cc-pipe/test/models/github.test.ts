import '@relmify/jest-fp-ts';
import { pipe } from "@effect-ts/core";
//  import { tuple } from "@effect-ts/core/Function";
//  import * as D from "@effect-ts/core/Collections/Immutable/Dictionary";
//  import * as A from "@effect-ts/core/Collections/Immutable/Array";
//  import * as O from "@effect-ts/core/Option";
 import * as E from "@effect-ts/core/Either";
//  import * as T from "@effect-ts/core/Effect";
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

import { GithubRepository } from "../../src/models/github.model";
import githubResponseSamples from "./github.sample.json";

const nameWithOwnerLens = pipe(GithubRepository.lens, L.prop("nameWithOwner"))

const smallExample = GithubRepository.build(
  {
    "__typename": "Repository",
    "id": "MDEwOlJlcG9zaXRvcnkxMDc2MDU5",
    "url": "https://github.com/maxdemarzi/neography",
    "name": "neography",
    "nameWithOwner": "maxdemarzi/neography",
    "stargazers": {
      "totalCount": 607
    },
    "owner": {
      "__typename": "User",
      "id": "MDQ6VXNlcjgyMzM0",
      "avatarUrl": "https://avatars.githubusercontent.com/u/82334?v=4",
      "login": "maxdemarzi",
      "url": "https://github.com/maxdemarzi"
    },
    "description": "A thin Ruby wrapper to the Neo4j Rest API",
    "createdAt": "2010-11-12T22:50:45Z",
    "updatedAt": "2021-03-24T16:12:37Z",
    "repositoryTopics": {
      "nodes": [
        {
          "topic": {
            "__typename": "Topic",
            "name": "neo4j"
          }
        },
        {
          "topic": {
            "__typename": "Topic",
            "name": "ruby"
          }
        },
        {
          "topic": {
            "__typename": "Topic",
            "name": "neo4j-driver"
          }
        },
      ]
    },
    "languages": {
      "nodes": [
        {
          "__typename": "Language",
          "name": "Ruby"
        }
      ]
    },
    "forks": {
      "totalCount": 130
    }
  }
)

describe("FastCheck MediumResponse", () => {
  it("Generate and Guard", () => {
    fc.assert(
      fc.property(
        arbitrary(GithubRepository),
        (p) => {
          return guard(GithubRepository).is(p) && (typeof nameWithOwnerLens.get(p) === "string")
        }
      )
    )
  })

  it("Fails to Decode", () => {
    expect(
      X.runEither(
        decoder(GithubRepository).decode({ success: "bar" }),
      )
    ).toBeLeft()
  })

  it("Decodes", () => {
    expect(
      X.runEither(
        decoder(GithubRepository).decode(githubResponseSamples[0]),
      )
    ).toBeRight()
  })

  it("Track fields", () => {
    expect(
      X.runEither(report(decode(GithubRepository)(Object.assign(
        {}, smallExample, {nameWithOwner:42}
      ))))
    ).toEqual(
      E.left([
        "Expecting String at nameWithOwner but instead got: 42 (number is not a string)"
      ])
    )
  })

  it("Removes unknown fields", () => {
    expect(
      Sync.run(
        strict(GithubRepository).shrink(
          Object.assign(
            { whatsThis: "an unknown field"},
            smallExample
          )
        )
      )
    ).toEqual(smallExample)
  })

  // it("Has optics for peering into the data", () => {
  //   const userLens = pipe(GithubRepository.lens, 
  //     L.prop("payload"), L.prop("references"), L.prop("User"),
  //     L.get
  //   )
  //   const postLens = pipe(MediumResponse.lens, 
  //     L.prop("payload"), L.prop("references"), L.prop("Post"),
  //     L.get
  //   )
    
  //   const program = pipe(
  //     T.do,
  //     T.bind("mr", () => decoder(MediumResponse).decode(githubSample) ),
  //     T.bind("users", ({mr}) => T.succeed(userLens(mr)) ),
  //     T.bind("posts", ({mr}) => T.succeed(postLens(mr)) ),
  //     T.bind("postsWithAuthors", ({users, posts}) => T.succeed(
  //       pipe(posts, 
  //         D.values, 
  //         A.map(p => tuple(p,users[p.creatorId]))
  //       )
  //     )),
  //     T.map( ({postsWithAuthors}) => postsWithAuthors)
  //   )

  //   pipe(program, T.chain((result) => 
  //         T.effectTotal(() => {
  //           console.log(result)
  //         })
  //   ), T.run)
  // })

})