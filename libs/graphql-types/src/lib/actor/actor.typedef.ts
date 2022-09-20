import gql from 'graphql-tag';

export const ActorTypeDef = gql`
  type Actor @node(label: Person) {
    name: String
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }
`;
