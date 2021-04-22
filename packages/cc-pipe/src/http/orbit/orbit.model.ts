import { AType, EType, make, opaque } from "@effect-ts/morphic"


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
