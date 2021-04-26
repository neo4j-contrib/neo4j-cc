import { AType, EType, make, opaque } from "@effect-ts/morphic"


// Anything with a name property
const NamedEntity_ = make((F) =>
  F.interface({
    __typename: F.string(), // "Topic", "Language"
    name: F.string(), //"Makefile"
  })
);
export interface NamedEntity extends AType<typeof NamedEntity_> {}
export interface NamedEntityRaw extends EType<typeof NamedEntity_> {}
export const NamedEntity = opaque<NamedEntityRaw, NamedEntity>()(NamedEntity_)

const GithubRepositoryOwner_ = make((F) =>
  F.interface({
    __typename: F.oneOfLiterals("Organization", "User")(), 
    id: F.string(),
    login: F.string(), // "akollegger",
    url: F.optional(F.string()), // "https://github.com/akollegger"
    avatarUrl: F.optional(F.string()), // "https://avatars.githubusercontent.com/u/82334?v=4"
  })
)
export interface GithubRepositoryOwner extends AType<typeof GithubRepositoryOwner_> {}
export interface GithubRepositoryOwnerRaw extends EType<typeof GithubRepositoryOwner_> {}
export const GithubRepositoryOwner = opaque<GithubRepositoryOwnerRaw, GithubRepositoryOwner>()(GithubRepositoryOwner_)

const GithubUser_ = make((F) =>
  F.interface({
    __typename: F.stringLiteral("Organization"),
    id: F.string(),
    login: F.string(), // "akollegger",
    location: F.string(), // "Malmö, Sweden",
    company: F.string(), // "Neo4j, Inc.",
    bio: F.string(), // 
    avatarUrl: F.string(),
    email: F.string(), // akollegger@gmail.com
    twitterUsername: F.string(), // "akollegger",
  })
)
export interface GithubUser extends AType<typeof GithubUser_> {}
export interface GithubUserRaw extends EType<typeof GithubUser_> {}
export const GithubUser = opaque<GithubUserRaw, GithubUser>()(GithubUser_)


const GithubRepositoryTopic_ = make((F) =>
  F.interface({
    topic: NamedEntity(F)
  })
)
export interface GithubRepositoryTopic extends AType<typeof GithubRepositoryTopic_> {}
export interface GithubRepositoryTopicRaw extends EType<typeof GithubRepositoryTopic_> {}
export const GithubRepositoryTopic = opaque<GithubRepositoryTopicRaw, GithubRepositoryTopic>()(GithubRepositoryTopic_)

const GithubRepository_ = make((F) =>
  F.interface({
      __typename: F.stringLiteral("Repository"), // "Repository"
      id: F.string(), // "MDEwOlJlcG9zaXRvcnk1MTEzNzM=",
      url: F.string(), // "https://github.com/neo4j-contrib/spatial",
      owner: GithubRepositoryOwner(F),
      name: F.string(), // "spatial",
      nameWithOwner: F.string(), // "neo4j-contrib/spatial",
      description: F.string(), // "Neo4j Spatial is a library of utilities for Neo4j that faciliates the enabling of spatial operations on data. In particular you can add spatial indexes to already located data, and perform spatial operations on the data like searching for data within specified regions or within a specified distance of a point of interest. In addition classes are provided to expose the data to geotools and thereby to geotools enabled applications like geoserver and uDig.",
      updatedAt: F.string(), // "2021-02-23T00:52:38Z",
      createdAt: F.string(), // "2010-02-10T15:23:02Z",
      repositoryTopics: F.interface({
        nodes: F.array(GithubRepositoryTopic(F))
      }),
      languages: F.interface({
        nodes: F.array(NamedEntity(F))
      }),
      forks: F.interface({
        totalCount: F.number(), // 42
      }),
      stargazers: F.interface({
        totalCount: F.number(), // 42
      })
      
  })
)
export interface GithubRepository extends AType<typeof GithubRepository_> {}
export interface GithubRepositoryRaw extends EType<typeof GithubRepository_> {}
export const GithubRepository = opaque<GithubRepositoryRaw, GithubRepository>()(GithubRepository_)

