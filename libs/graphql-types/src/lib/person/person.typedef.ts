import { gql } from 'apollo-server'

export const PersonTypeDef = gql`
  """
  A Person is a root entity representing an individual human.
  """
  type Person {
    """UUID"""
    id: ID! @id

    """Full name"""
    name: String

    """Verified, primary email address"""
    email: String
  }
`
