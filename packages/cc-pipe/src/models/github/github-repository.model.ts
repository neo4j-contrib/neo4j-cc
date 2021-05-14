
import {pipe} from "@effect-ts/core/Function"

import * as S from "@effect-ts/schema";
import { Model } from "@effect-ts/schema";
import * as Parser from "@effect-ts/schema/Parser";
import { Identifier, UrlString } from "../value";
import { GithubRepositoryOwner } from "./github-owner.model";

export class GitHubRepositoryTopic extends Model<GitHubRepositoryTopic>()(
  pipe(
    S.required({
      topic: S.required({
        name: S.string
      })
    })
  )
) {}
 
export class GitHubRepository extends Model<GitHubRepository>()(
  pipe(
    S.struct({
      required:{
        id: Identifier,
        url: UrlString,
        owner: GithubRepositoryOwner,
        name: S.string,
      },
      optional: {
        nameWithOwner: S.string,
        description: S.string,
        updatedAt: S.date,
        createdAt: S.date,
        repositoryTopics: S.required({
          nodes: S.array(GitHubRepositoryTopic)
        }),
        languages: S.required({
          nodes: S.array(S.required({
            name: S.string
          }))
        }),
        forks: S.required({
          totalCount: S.int
        }),
        stargazers: S.required({
          totalCount: S.int
        })
      }
    }),
    S.withTag("__typename", "Repository")
  )
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