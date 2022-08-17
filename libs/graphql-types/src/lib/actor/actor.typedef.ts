import { gql } from 'apollo-server'

export const ActorTypeDef = gql`
  type Actor {
    name: String
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }
`
