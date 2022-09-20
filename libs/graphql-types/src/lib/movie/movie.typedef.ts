import gql from 'graphql-tag';

export const MovieTypeDef = gql`
  type Movie {
    title: String
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
  }
`;
