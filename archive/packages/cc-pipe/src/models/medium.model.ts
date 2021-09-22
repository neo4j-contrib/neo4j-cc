import { pipe } from "@effect-ts/core";
import { tuple } from "@effect-ts/core/Function";
import * as L from "@effect-ts/monocle/Lens";
import * as Sync from "@effect-ts/core/Sync";
import * as Dict from "@effect-ts/core/Collections/Immutable/Dictionary";
import * as A from "@effect-ts/core/Collections/Immutable/Array";
import * as S from "@effect-ts/schema";
import { Model } from "@effect-ts/schema";

export class MediumPost extends Model<MediumPost>("MediumPost")(
  S.props({
    type: S.prop(S.literal("Post")),  //  "Post"
    id: S.prop(S.string),             // "a5258d545daf",
    versionId: S.prop(S.string),      // "167543c7f301",
    creatorId: S.prop(S.string),      // "af7398b2c7b3",
    title: S.prop(S.string),          // "Solving Sudoku with Neo4j",
    createdAt: S.prop(S.dateMs),      // 1577892375295,
    updatedAt: S.prop(S.dateMs),        // 1578318120255,
    firstPublishedAt: S.prop(S.dateMs), // 1577919021434,
    latestPublishedAt: S.prop(S.dateMs), // 1578318120049,
    slug: S.prop(S.string),           //  "solving-sudoku-with-neo4j",
    uniqueSlug: S.prop(S.string),     // "solving-sudoku-with-neo4j-a5258d545daf",
    canonicalUrl: S.prop(S.string).opt(), //  "",
    webCanonicalUrl: S.prop(S.string).opt(), // "",
    mediumUrl: S.prop(S.string) // "",
  })
) {}


export class MediumUser extends Model<MediumUser>("MediumUser")(
  S.props({
    type: S.prop(S.literal("User")),   // "User"
    userId: S.prop(S.string),       // "af7398b2c7b3",
    name: S.prop(S.string),         // "Nathan Smith",
    username: S.prop(S.string),     // "nsmith_piano",
    createdAt: S.prop(S.dateMs),    // 1467837137154,
    bio: S.prop(S.string),          // "Senior Data Scientist at Lovevery. Organizer of the Kansas City Graph Databases Meetup.",
    twitterScreenName: S.prop(S.string), // "nsmith_piano",
    mediumMemberAt: S.prop(S.dateMs), // 1578368052000
  })
) {}

export class MediumStreamItem extends Model<MediumStreamItem>("MediumStreamItem")(
  S.props(
    {
      type: S.prop(S.literal("???")),
      createdAt: S.prop(S.dateMs),
      itemType: S.prop(S.string),
      postPreview: S.prop(S.props({
        postId: S.prop(S.string)
      })),
    }
  )
) {}

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

export class MediumResponse extends Model<MediumResponse>("MediumResponse")(
  S.props(
    {
      success: S.prop(S.bool),
      payload: S.prop(S.props({
        streamItems: S.prop(S.array(MediumStreamItem)),
        references: S.prop(S.props({
          User: S.prop(S.props<{[key:string]:S.prop(MediumUser)}>({foo:S.prop(MediumUser)})), // F.record(MediumUser(F)),
          Post: S.prop(S.object)  // F.record(MediumPost(F))
        }))
      }))
    }
  )
) {}

export const userLens = pipe(MediumResponse.lens, 
  L.prop("payload"), L.prop("references"), L.prop("User"),
  L.get
)
export const postLens = pipe(MediumResponse.lens, 
  L.prop("payload"), L.prop("references"), L.prop("Post"),
  L.get
)

export const pairPostsWithAuthors = (mr:MediumResponse) => pipe(
  Sync.do,
  Sync.bind("users", () => Sync.succeed(userLens(mr)) ),
  Sync.bind("posts", () => Sync.succeed(postLens(mr)) ),
  Sync.bind("postsWithAuthors", ({users, posts}) => Sync.succeed(
    pipe(posts, 
      Dict.values, 
      A.map(p => tuple(p,users[p.creatorId]))
    )
  )),
  Sync.map( ({postsWithAuthors}) => postsWithAuthors), 
  Sync.run
)