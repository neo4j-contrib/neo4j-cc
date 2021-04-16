import { AType, EType, make, opaque } from "@effect-ts/morphic"

const MediumPost_ = make((F) =>
  F.interface({
      type: F.string(), //  "Post"
      id: F.string(), // "a5258d545daf",
      versionId: F.string(), // "167543c7f301",
      creatorId: F.string(), // "af7398b2c7b3",
      title: F.string(), // "Solving Sudoku with Neo4j",
      createdAt: F.number(), // 1577892375295,
      updatedAt: F.number(), // 1578318120255,
      firstPublishedAt: F.number(), // 1577919021434,
      latestPublishedAt: F.number(), // 1578318120049,
      slug: F.string(), //  "solving-sudoku-with-neo4j",
      uniqueSlug: F.string(), // "solving-sudoku-with-neo4j-a5258d545daf",
      canonicalUrl: F.string(), //  "",
      webCanonicalUrl: F.string(), // "",
      mediumUrl: F.string() // "",
  })
)
export interface MediumPost extends AType<typeof MediumPost_> {}
export interface MediumPostRaw extends EType<typeof MediumPost_> {}
export const MediumPost = opaque<MediumPostRaw, MediumPost>()(MediumPost_)

const MediumUser_ = make((F) =>
  F.interface({
    type: F.string(), // "User"
    userId: F.string(), // "af7398b2c7b3",
    name: F.string(), // "Nathan Smith",
    username: F.string(), // "nsmith_piano",
    createdAt: F.number(), // 1467837137154,
    bio: F.string(), // "Senior Data Scientist at Lovevery. Organizer of the Kansas City Graph Databases Meetup.",
    twitterScreenName: F.string(), // "nsmith_piano",
    mediumMemberAt: F.number(), // 1578368052000
  })
)
export interface MediumUser extends AType<typeof MediumUser_> {}
export interface MediumUserRaw extends EType<typeof MediumUser_> {}
export const MediumUser = opaque<MediumUserRaw, MediumUser>()(MediumUser_)

const MediumStreamItem_ = make((F) =>
  F.interface(
    {
      type: F.string(),
      createdAt: F.number(),
      itemType: F.string(),
      postPreview: F.interface({
        postId: F.string()
      }),
    }
  )
)
export interface MediumStreamItem extends AType<typeof MediumStreamItem_> {}
export interface MediumStreamItemRaw extends EType<typeof MediumStreamItem_> {}
export const MediumStreamItem = opaque<MediumStreamItemRaw, MediumStreamItem>()(MediumStreamItem_)

// interface StringToFoo { type:"StringToFoo", [key: string]: Foo|string; }
//
// ... becomes ...
//
// const Foo_ = make((F) => 
//   F.interface(
//     {
//       k: F.string()
//     }
//   )
// )
// interface Foo extends AType<typeof Foo_> {}
// interface FooRaw extends EType<typeof Foo_> {}
// const Foo = opaque<FooRaw, Foo>()(Foo_)
//
// ... used as ..
// F.record(Foo(F))

const MediumResponse_ = make((F) =>
  F.interface(
    {
      success: F.boolean(),
      payload: F.interface({
        streamItems: F.array(MediumStreamItem(F)),
        references: F.interface({
          User: F.record(MediumUser(F)),
          Post: F.record(MediumPost(F))
        })
      })
    }
  )
)

export interface MediumResponse extends AType<typeof MediumResponse_> {}
export interface MediumResponseRaw extends EType<typeof MediumResponse_> {}
export const MediumResponse = opaque<MediumResponseRaw, MediumResponse>()(MediumResponse_)

