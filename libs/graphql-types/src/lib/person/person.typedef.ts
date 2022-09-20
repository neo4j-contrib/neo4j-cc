import gql from 'graphql-tag';

export const PersonDefinition = gql`
  """
  A Person is a root entity representing an individual human.
  """
  type Person @node(plural: "persons") {
    """
    UUID
    """
    id: ID! @id

    """
    Full birth name
    """
    name: String
  }
`;
