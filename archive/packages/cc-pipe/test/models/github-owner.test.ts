import '@relmify/jest-fp-ts'
// import { pipe } from "@effect-ts/core"
import * as T from "@effect-ts/core/Effect"
import * as E from "@effect-ts/core/Either"

import * as S from "@effect-ts/schema";

import * as FC from "fast-check"

import { GitHubUser, GitHubOrganization, parseJsonGithubRepositoryOwner, parseLiteralGithubRepositoryOwner, createGitHubUser, createGitHubOrganization } from "../../src/models/github/github-owner.model";
import { Identifier, Username } from "../../src/models/value"

const acceptableValues = {
  id: "0xc001caf3",
  login: "akollegger",
  url: "https://github.com/akollegger",
  avatarUrl: "https://avatars.githubusercontent.com/u/82334?v=4",
  location: "Malmö, Sweden",
  company: "Neo4j, Inc.",
  bio: "self-referential integrity",
  email: "akollegger@gmail.com",
  twitterUsername: "akollegger",
}

describe("GithubUser", () => {
  it("Arbitrary and Guard", () => {
    FC.assert(
      FC.property(
        GitHubUser.Arbitrary(FC), // generates an arbitrary GithubRepositoryOwner which conforms to the Schema
        (p) => {
          return GitHubUser.Guard(p) //&& (typeof nameWithOwnerLens.get(p) === "string")
        }
      )
    )
  })

  it("parse literal", async () => {
    const result = await T.runPromise(
      parseLiteralGithubRepositoryOwner({
        __typename: "User",
        id: acceptableValues.id,
        login: acceptableValues.login
      })
    )
    expect(result.id).toBe(acceptableValues.id)
    expect(GitHubUser.Guard(result)).toBeTruthy()
  })

  it("parse literal with optionals", async () => {
    const result = await T.runPromise(
      parseLiteralGithubRepositoryOwner({
        __typename: "User",
        id: acceptableValues.id,
        login: acceptableValues.login,
        url: acceptableValues.url,
        avatarUrl: acceptableValues.avatarUrl
      })
    )
    expect(result.id).toBe(acceptableValues.id)
    expect(GitHubUser.Guard(result)).toBeTruthy()
  })

  it("parse literal failure", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralGithubRepositoryOwner({
          __typename: "User",
          login: acceptableValues.login
        })
      )
    )
    expect(result).toBeLeft();
    if (E.isLeft(result)) {
      expect(result.left).toEqual(new S.CondemnException({
        message: "1 error(s) found while processing a union\n"
               + "└─ 1 error(s) found while processing member \"User\"\n"
               + "   └─ 1 error(s) found while processing User\n"
               + "      └─ 1 error(s) found while checking keys\n"
               + "         └─ missing required key \"id\""
      }))
    }
  })

  it("parse literal optionals failure", async () => {
    const result = await T.runPromise(
      T.either(
        parseLiteralGithubRepositoryOwner({
          __typename: "User",
          id: acceptableValues.id,
          login: acceptableValues.login,
          url: 42
        })
      )
    )
    expect(result).toBeLeft();
    if (E.isLeft(result)) {
      expect(result.left).toEqual(new S.CondemnException({
        message: "1 error(s) found while processing a union\n"
               + "└─ 1 error(s) found while processing member \"User\"\n"
               + "   └─ 1 error(s) found while processing User\n"
               + "      └─ 1 error(s) found while processing a struct\n"
               + "         └─ 1 error(s) found while processing optional key \"url\"\n"
               + "            └─ 1 error(s) found while processing a refinement\n"
               + "               └─ cannot process 42, expected an string"
      }))
    }
  })

  it("parse json", async () => {
    const result = await T.runPromise(
      parseJsonGithubRepositoryOwner(JSON.stringify({
        __typename: "User",
        id: acceptableValues.id,
        login: acceptableValues.login
      }))
    )
    expect(result.id).toBe(acceptableValues.id)
    expect(GitHubUser.Guard(result)).toBeTruthy()
  })

  it("parse json failure", async () => {
    const result = await T.runPromise(
      T.either(
        parseJsonGithubRepositoryOwner(JSON.stringify({
          id: acceptableValues.id,
          login: acceptableValues.login
        }))
      )
    )
    expect(result).toBeLeft();
    if (E.isLeft(result)) {
      expect(result.left).toEqual(new S.CondemnException({
        message: "cannot extract key __typename from {\"id\":\"0xc001caf3\",\"login\":\"akollegger\"}, expected one of Organization, User"
      }))
    }
  })

  it("constructs", async () => {
    const result = await T.runPromise(
      createGitHubUser({
        id: Identifier(acceptableValues.id),
        login: Username(acceptableValues.login)
      })
    )
    expect(GitHubUser.Guard(result)).toBeTruthy();
  })

})

describe("GithubRepositoryOrganization", () => {
  it("Arbitrary and Guard", () => {
    FC.assert(
      FC.property(
        GitHubOrganization.Arbitrary(FC), 
        (p) => {
          return GitHubOrganization.Guard(p)
        }
      )
    )
  })

  it("parse literal", async () => {
    const result = await T.runPromise(
      parseLiteralGithubRepositoryOwner({
        __typename: "Organization",
        id: acceptableValues.id,
        login: acceptableValues.login
      })
    )
    expect(result.id).toBe(acceptableValues.id)
    expect(GitHubOrganization.Guard(result)).toBeTruthy()
  })

  it("parse json", async () => {
    const result = await T.runPromise(
      parseJsonGithubRepositoryOwner(JSON.stringify({
        __typename: "Organization",
        id: acceptableValues.id,
        login: acceptableValues.login
      }))
    )
    expect(result.id).toBe(acceptableValues.id)
    expect(GitHubOrganization.Guard(result)).toBeTruthy()
  })

  it("constructs", async () => {
    const result = await T.runPromise(
      createGitHubOrganization({
        id: Identifier(acceptableValues.id),
        login: Username(acceptableValues.login)
      })
    )
    expect(GitHubOrganization.Guard(result)).toBeTruthy();
  })
})