import { gql } from 'apollo-server'

/**
 * 
 * Inspired from many sources:
 * 
 * @see https://auth0.com/docs/manage-users/user-accounts/user-profiles/user-profile-structure
 * 
 */
export const ProfileTypeDef = gql`
  """
  A profile is public information describing a person.
  """
  type Profile {
    """
    UUID of this Profile
    """
    id: ID! @id

    """
    Timestamp when this Profile was created
    """
    createdAt: DateTime

    """
    Timestamp when this Profile was most recently updated
    """
    updatedAt: DateTime

    """
    The person's family name, surname or last name.
    """
    familyName: String

    """
    The person's given or first name.
    """
    givenName: String

    """
    A short, single term name for referring to this person. Often this is a username or handle
    which is used in '@'-style mentions. 
    """
    nickname: String

    """
    URL pointing to a person's profile picture.
    """
    picture: String

    """
    Person's verified email address
    """
    email: String

    """
    Person's phone number
    """
    phoneNumber: String
  }
`
