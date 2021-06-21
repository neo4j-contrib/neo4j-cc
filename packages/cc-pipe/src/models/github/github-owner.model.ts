
// import {pipe} from "@effect-ts/core/Function"

import * as S from "@effect-ts/schema";
import { Model } from "@effect-ts/schema";
import * as Parser from "@effect-ts/schema/Parser";
import { EmailAddress, Identifier, UrlString, Username } from "../value";

const GitHubOwnerProperties = S.props({
  id: S.prop(Identifier),
  login: S.prop(Username),
  url: S.prop(UrlString).opt(),
  avatarUrl: S.prop(UrlString).opt(),
  location: S.prop(S.string).opt(), 
  company: S.prop(S.string).opt(), 
  bio: S.prop(S.string).opt(), 
  email: S.prop(EmailAddress).opt(),
  twitterUsername: S.prop(Username).opt()
})

export class GitHubUser extends Model<GitHubUser>("User")(
  S.props({
    __typename: S.prop(S.literal("User")),
    ...GitHubOwnerProperties.props
  })
) {}

/**
 * Constructs a GithubUser.
 */
 export const createGitHubUser = GitHubUser.Constructor["|>"](S.condemnFail)

export class GitHubOrganization extends Model<GitHubOrganization>()(
  S.props({
    __typename: S.prop(S.literal("Organization")),
    ...GitHubOwnerProperties.props
  })
) {}

/**
 * Constructs a GitHubOrganization.
 */
 export const createGitHubOrganization = GitHubOrganization.Constructor["|>"](S.condemnFail)


/**
 * Either a "User" or an "Organization" may be an owner.
 */
export const GithubRepositoryOwner = S.union({User:GitHubUser, Organization:GitHubOrganization})


/**
 * Parses a JSON-formatted string, returning a typed Model.
 */
export const parseJsonGithubRepositoryOwner = S.jsonString[">>>"](GithubRepositoryOwner)["|>"](Parser.for)["|>"](S.condemnFail)

/**
 * Parses an object literal, returning a typed Model.
 */
export const parseLiteralGithubRepositoryOwner = Parser.for(GithubRepositoryOwner)["|>"](S.condemnFail)



