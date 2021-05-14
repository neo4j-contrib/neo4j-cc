import '@relmify/jest-fp-ts'
import { pipe } from "@effect-ts/core"
import * as T from "@effect-ts/core/Effect"
import * as E from "@effect-ts/core/Either"

import * as L from "@effect-ts/monocle/Lens"
import * as O from "@effect-ts/monocle/Optional"
import * as S from "@effect-ts/schema";

import * as FC from "fast-check"

import { GitHubRepository, parseJsonGitHubRepository, parseLiteralGitHubRepository } from "../../src/models/github.schema";

const acceptableValues = {
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
  "collaborators": null,
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
          "name": "neography"
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
      {
        "topic": {
          "__typename": "Topic",
          "name": "graphs"
        }
      },
      {
        "topic": {
          "__typename": "Topic",
          "name": "graph-database"
        }
      }
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

describe("GitHubRepository", () => {
  it("Arbitrary and Guard", () => {
    FC.assert(
      FC.property(
        GitHubRepository.Arbitrary(FC), // generates an arbitrary GithubRepositoryOwner which conforms to the Schema
        (p) => {
          return GitHubRepository.Guard(p) //&& (typeof nameWithOwnerLens.get(p) === "string")
        }
      )
    )
  })

  it("parse literal", async () => {
    const result = await T.runPromise(
      parseLiteralGitHubRepository({
        __typename: "Repository",
        id: acceptableValues.id,
        owner: acceptableValues.owner,
        url: acceptableValues.url,
        name: acceptableValues.name
      })
    )
    expect(result.id).toBe(acceptableValues.id)
    expect(GitHubRepository.Guard(result)).toBeTruthy()
  })

  it("parse literal with optionals", async () => {
    const stargazers = pipe(
      L.id<GitHubRepository>(),
      L.asOptional,
      O.prop("stargazers"),
      O.fromNullable,
      O.prop("totalCount"),
    )
    const forkCount = pipe(
      L.id<GitHubRepository>(),
      L.asOptional,
      O.prop("forks"),
      O.fromNullable,
      O.prop("totalCount"),
    )
    const result = await T.runPromise(
      parseLiteralGitHubRepository({
        __typename: "Repository",
        id: acceptableValues.id,
        owner: acceptableValues.owner,
        url: acceptableValues.url,
        name: acceptableValues.name,
        stargazers: {
          totalCount: acceptableValues.stargazers.totalCount
        }
      })
    )
    expect(stargazers.getOption(result)).toBeSome()
    expect(forkCount.getOption(result)).toBeNone()
    expect(GitHubRepository.Guard(result)).toBeTruthy()
  })

  it("parse literal failure", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralGitHubRepository({
          __typename: "Repository",
          owner: acceptableValues.owner,
          url: acceptableValues.url,
          name: acceptableValues.name,
        })
      )
    )
    expect(result).toBeLeft();
    if (E.isLeft(result)) {
      expect(result.left).toEqual(new S.CondemnException({
        message: "1 error(s) found while processing an intersection\n"
              +  "└─ 1 error(s) found while processing member 0\n"
              +  "   └─ 1 error(s) found while checking keys\n"
              +  "      └─ missing required key \"id\""
      }))
    }
  })

  it("parse literal optionals failure", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralGitHubRepository({
          __typename: "Repository",
          id: acceptableValues.id,
          owner: acceptableValues.owner,
          url: acceptableValues.url,
          name: acceptableValues.name,
          stargazers: true
        })
      )
    )
    expect(result).toBeLeft();
    if (E.isLeft(result)) {
      expect(result.left).toEqual(new S.CondemnException({
        message: "1 error(s) found while processing an intersection\n"
              +  "└─ 1 error(s) found while processing member 1\n"
              +  "   └─ 1 error(s) found while processing a struct\n"
              +  "      └─ 1 error(s) found while processing optional key \"stargazers\"\n"
              +  "         └─ cannot process true, expected a record"
      }))
    }
  })

  it("parse json", async () => {
    const result = await T.runPromise(
      parseJsonGitHubRepository(JSON.stringify({
        __typename: "Repository",
        id: acceptableValues.id,
        owner: acceptableValues.owner,
        url: acceptableValues.url,
        name: acceptableValues.name,
        stargazers: {
          totalCount: acceptableValues.stargazers.totalCount
        }
      }))
    )
    expect(result.id).toBe(acceptableValues.id)
    expect(GitHubRepository.Guard(result)).toBeTruthy()
  })

//   it("parse json failure", async () => {
//     const result = await T.runPromise(
//       T.either(
//         parseJsonGithubRepositoryOwner(JSON.stringify({
//           id: acceptableValues.id,
//           login: acceptableValues.login
//         }))
//       )
//     )
//     expect(result).toBeLeft();
//     if (E.isLeft(result)) {
//       expect(result.left).toEqual(new S.CondemnException({
//         message: "cannot extract key __typename from {\"id\":\"0xc001caf3\",\"login\":\"akollegger\"}, expected one of User, Organization"
//       }))
//     }
//   })

//   it("constructs", async () => {
//     const result = await T.runPromise(
//       createGitHubUser({
//         id: Id(acceptableValues.id),
//         login: Username(acceptableValues.login)
//       })
//     )
//     expect(GitHubUser.Guard(result)).toBeTruthy();
//   })

// })

// describe("GithubRepositoryOrganization", () => {
//   it("Arbitrary and Guard", () => {
//     FC.assert(
//       FC.property(
//         GitHubOrganization.Arbitrary(FC), 
//         (p) => {
//           return GitHubOrganization.Guard(p)
//         }
//       )
//     )
//   })

//   it("parse literal", async () => {
//     const result = await T.runPromise(
//       parseLiteralGithubRepositoryOwner({
//         __typename: "Organization",
//         id: acceptableValues.id,
//         login: acceptableValues.login
//       })
//     )
//     expect(result.id).toBe(acceptableValues.id)
//     expect(GitHubOrganization.Guard(result)).toBeTruthy()
//   })

//   it("parse json", async () => {
//     const result = await T.runPromise(
//       parseJsonGithubRepositoryOwner(JSON.stringify({
//         __typename: "Organization",
//         id: acceptableValues.id,
//         login: acceptableValues.login
//       }))
//     )
//     expect(result.id).toBe(acceptableValues.id)
//     expect(GitHubOrganization.Guard(result)).toBeTruthy()
//   })

//   it("constructs", async () => {
//     const result = await T.runPromise(
//       createGitHubOrganization({
//         id: Id(acceptableValues.id),
//         login: Username(acceptableValues.login)
//       })
//     )
//     expect(GitHubOrganization.Guard(result)).toBeTruthy();
//   })
})