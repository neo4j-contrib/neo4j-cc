
// import {pipe} from "@effect-ts/core/Function"

import * as S from "@effect-ts/schema";
import { Model } from "@effect-ts/schema";
import * as Parser from "@effect-ts/schema/Parser";
import { Identifier, UrlString } from "../value";
import { GithubRepositoryOwner } from "./github-owner.model";

export class GitHubRepositoryTopic extends Model<GitHubRepositoryTopic>("GitHubRepositoryTopic")(
  S.props({
    topic: S.prop(S.props({
      name: S.prop(S.string)
    }))
  })
) {}
 
export class GitHubRepository extends Model<GitHubRepository>("GitHubRepository")(
  S.props({
    __typename: S.prop(S.literal("Repository")),
    id: S.prop(Identifier),
    url: S.prop(UrlString),
    owner: S.prop(GithubRepositoryOwner),
    name: S.prop(S.string),
    nameWithOwner: S.prop(S.string).opt(),
    description: S.prop(S.string).opt(),
    updatedAt: S.prop(S.date).opt(),
    createdAt: S.prop(S.date).opt(),
    repositoryTopics: S.prop(S.props({
      nodes: S.prop(S.array(GitHubRepositoryTopic))
    })).opt(),
    languages: S.prop(S.props({
      nodes: S.prop(S.array(S.props({
        name: S.prop(S.string)
      })))
    })).opt(),
    forks: S.prop(S.props({
      totalCount: S.prop(S.int)
    })).opt(),
    stargazers: S.prop(S.props({
      totalCount: S.prop(S.int)
    })).opt()
  })
) {}

/**
 * Constructs a GithubRepository.
 */
 export const createGithubRepository = GitHubRepository.Constructor["|>"](S.condemnFail)

/**
 * Parses a JSON-formatted string, returning a typed Model.
 */
export const parseJsonGitHubRepository = S.jsonString[">>>"](GitHubRepository)["|>"](Parser.for)["|>"](S.condemnFail)

/**
 * Parses an object literal, returning a typed Model.
 */
export const parseLiteralGitHubRepository = Parser.for(GitHubRepository)["|>"](S.condemnFail)