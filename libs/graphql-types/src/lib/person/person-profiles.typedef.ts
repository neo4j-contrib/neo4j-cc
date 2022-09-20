import gql from 'graphql-tag';

export const PersonProfilesTypeDef = gql`
  type PersonProfiles @node(label: "Person") {
    """
    UUID of the Person
    """
    id: ID! @id

    profiles: [Profile!]! @relationship(type: "PERSON_PROFILE", direction: OUT)
  }
`;
