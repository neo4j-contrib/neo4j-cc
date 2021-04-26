import { AType, EType, make, opaque } from "@effect-ts/morphic"

const OrbitRelationship_ = make((F) =>
  F.interface({
    data: F.interface({
      id: F.string(), // "3",
      type: F.string(), // "activity_type"
    })
  })
)
export interface OrbitRelationship extends AType<typeof OrbitRelationship_> {}
export interface OrbitRelationshipRaw extends EType<typeof OrbitRelationship_> {}
export const OrbitRelationship = opaque<OrbitRelationshipRaw, OrbitRelationship>()(OrbitRelationship_)

// Orbit User
const OrbitUser_ = make((F) => 
  F.interface({
    id: F.string(), // "1610",
    type: F.stringLiteral("user"),
    attributes:F.interface({
      name:F.string(), // "Andreas Kollegger",
      updated_at: F.string(), // "2021-04-19T18:48:05.716Z",
      created_at: F.string(), // "2021-03-16T11:56:03.296Z",
      email: F.string(), // "andreas.kollegger@neotechnology.com"
    })
  })
)
export interface OrbitUser extends AType<typeof OrbitUser_> {}
export interface OrbitUserRaw extends EType<typeof OrbitUser_> {}
export const OrbitUser = opaque<OrbitUserRaw, OrbitUser>()(OrbitUser_)


// Orbit Activity Type
const OrbitActivityType_ = make((F) => 
  F.interface({
    id: F.string(), // "1610",
    type: F.stringLiteral("activity_type"),
    attributes:F.interface({
      name: F.string(), // "Sent a message in Discord",
      short_name: F.string(), // "Discord message",
      key: F.string(), // "discord:message:sent",
      category: F.string(), // "discord",
      weight: F.string() // "0.5"
    })
  })
)
export interface OrbitActivityType extends AType<typeof OrbitActivityType_> {}
export interface OrbitActivityTypeRaw extends EType<typeof OrbitActivityType_> {}
export const OrbitActivityType = opaque<OrbitActivityTypeRaw, OrbitActivityType>()(OrbitActivityType_)


/**
 *  Orbit Activity
 *  
 */
const OrbitActivity_ = make((F) => 
  F.interface({
    id: F.string(), // "1610",
    type: F.string(), // star_activity... How does this relate to the activity types?
    attributes:F.interface({
      action: F.string(), // "created",
      created_at: F.string(), // "2021-03-31T13:25:49.716Z",
      key: F.string(), // "neo4j-contrib/spatial@2010-02-10T15:23:02Z",
      occurred_at: F.string(), // "2010-02-10T15:23:02.000Z",
      updated_at: F.string(), // "2021-03-31T13:25:49.716Z",
      type: F.string(), // "StarActivity",
      tags: F.array(F.string()), // [ "channel:github", "github_organization:neo4j-contrib", "github_repository:neo4j-contrib/spatial"],
      orbit_url: F.string(), // "https://app.orbit.love/neo4j-community/activities/11607575",
      weight: F.string(), // "0.5",
      activity_link: F.string(), // "https://github.com/neo4j-contrib/spatial",
      g_starred_at: F.string(), // "2010-02-10T15:23:02.000Z"
    }),
    relationships:F.record(OrbitRelationship(F))
  })
)
export interface OrbitActivity extends AType<typeof OrbitActivity_> {}
export interface OrbitActivityRaw extends EType<typeof OrbitActivity_> {}
export const OrbitActivity = opaque<OrbitActivityRaw, OrbitActivity>()(OrbitActivity_)
