import { gql } from 'apollo-server'

export const MovieTypeDef = gql`
  type Movie {
    title: String
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
  }
`
