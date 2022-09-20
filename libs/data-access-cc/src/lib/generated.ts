import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreatePersonProfilesMutationResponse = {
  __typename?: 'CreatePersonProfilesMutationResponse';
  info: CreateInfo;
  personProfiles: Array<PersonProfiles>;
};

export type CreatePersonsMutationResponse = {
  __typename?: 'CreatePersonsMutationResponse';
  info: CreateInfo;
  persons: Array<Person>;
};

export type CreateProfilesMutationResponse = {
  __typename?: 'CreateProfilesMutationResponse';
  info: CreateInfo;
  profiles: Array<Profile>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']>;
  min?: Maybe<Scalars['DateTime']>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPersonProfiles: CreatePersonProfilesMutationResponse;
  createPersons: CreatePersonsMutationResponse;
  createProfiles: CreateProfilesMutationResponse;
  deletePersonProfiles: DeleteInfo;
  deletePersons: DeleteInfo;
  deleteProfiles: DeleteInfo;
  updatePersonProfiles: UpdatePersonProfilesMutationResponse;
  updatePersons: UpdatePersonsMutationResponse;
  updateProfiles: UpdateProfilesMutationResponse;
};

export type MutationCreatePersonProfilesArgs = {
  input: Array<PersonProfilesCreateInput>;
};

export type MutationCreatePersonsArgs = {
  input: Array<PersonCreateInput>;
};

export type MutationCreateProfilesArgs = {
  input: Array<ProfileCreateInput>;
};

export type MutationDeletePersonProfilesArgs = {
  delete?: InputMaybe<PersonProfilesDeleteInput>;
  where?: InputMaybe<PersonProfilesWhere>;
};

export type MutationDeletePersonsArgs = {
  where?: InputMaybe<PersonWhere>;
};

export type MutationDeleteProfilesArgs = {
  where?: InputMaybe<ProfileWhere>;
};

export type MutationUpdatePersonProfilesArgs = {
  connect?: InputMaybe<PersonProfilesConnectInput>;
  connectOrCreate?: InputMaybe<PersonProfilesConnectOrCreateInput>;
  create?: InputMaybe<PersonProfilesRelationInput>;
  delete?: InputMaybe<PersonProfilesDeleteInput>;
  disconnect?: InputMaybe<PersonProfilesDisconnectInput>;
  update?: InputMaybe<PersonProfilesUpdateInput>;
  where?: InputMaybe<PersonProfilesWhere>;
};

export type MutationUpdatePersonsArgs = {
  update?: InputMaybe<PersonUpdateInput>;
  where?: InputMaybe<PersonWhere>;
};

export type MutationUpdateProfilesArgs = {
  update?: InputMaybe<ProfileUpdateInput>;
  where?: InputMaybe<ProfileWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** A Person is a root entity representing an individual human. */
export type Person = {
  __typename?: 'Person';
  /** UUID */
  id: Scalars['ID'];
  /** Full birth name */
  name?: Maybe<Scalars['String']>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type PersonCreateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String'];
  node: Person;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PersonSort objects to sort Persons by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonProfiles = {
  __typename?: 'PersonProfiles';
  /** UUID of the Person */
  id: Scalars['ID'];
  profiles: Array<Profile>;
  profilesAggregate?: Maybe<PersonProfilesProfileProfilesAggregationSelection>;
  profilesConnection: PersonProfilesProfilesConnection;
};

export type PersonProfilesProfilesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProfileOptions>;
  where?: InputMaybe<ProfileWhere>;
};

export type PersonProfilesProfilesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProfileWhere>;
};

export type PersonProfilesProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonProfilesProfilesConnectionSort>>;
  where?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
};

export type PersonProfilesAggregateSelection = {
  __typename?: 'PersonProfilesAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
};

export type PersonProfilesConnectInput = {
  profiles?: InputMaybe<Array<PersonProfilesProfilesConnectFieldInput>>;
};

export type PersonProfilesConnectOrCreateInput = {
  profiles?: InputMaybe<Array<PersonProfilesProfilesConnectOrCreateFieldInput>>;
};

export type PersonProfilesConnection = {
  __typename?: 'PersonProfilesConnection';
  edges: Array<PersonProfilesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonProfilesCreateInput = {
  profiles?: InputMaybe<PersonProfilesProfilesFieldInput>;
};

export type PersonProfilesDeleteInput = {
  profiles?: InputMaybe<Array<PersonProfilesProfilesDeleteFieldInput>>;
};

export type PersonProfilesDisconnectInput = {
  profiles?: InputMaybe<Array<PersonProfilesProfilesDisconnectFieldInput>>;
};

export type PersonProfilesEdge = {
  __typename?: 'PersonProfilesEdge';
  cursor: Scalars['String'];
  node: PersonProfiles;
};

export type PersonProfilesOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PersonProfilesSort objects to sort PersonProfiles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonProfilesSort>>;
};

export type PersonProfilesProfileProfilesAggregationSelection = {
  __typename?: 'PersonProfilesProfileProfilesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonProfilesProfileProfilesNodeAggregateSelection>;
};

export type PersonProfilesProfileProfilesNodeAggregateSelection = {
  __typename?: 'PersonProfilesProfileProfilesNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  nickname: StringAggregateSelectionNullable;
  phoneNumber: StringAggregateSelectionNullable;
  picture: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type PersonProfilesProfilesAggregateInput = {
  AND?: InputMaybe<Array<PersonProfilesProfilesAggregateInput>>;
  OR?: InputMaybe<Array<PersonProfilesProfilesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonProfilesProfilesNodeAggregationWhereInput>;
};

export type PersonProfilesProfilesConnectFieldInput = {
  where?: InputMaybe<ProfileConnectWhere>;
};

export type PersonProfilesProfilesConnectOrCreateFieldInput = {
  onCreate: PersonProfilesProfilesConnectOrCreateFieldInputOnCreate;
  where: ProfileConnectOrCreateWhere;
};

export type PersonProfilesProfilesConnectOrCreateFieldInputOnCreate = {
  node: ProfileOnCreateInput;
};

export type PersonProfilesProfilesConnection = {
  __typename?: 'PersonProfilesProfilesConnection';
  edges: Array<PersonProfilesProfilesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonProfilesProfilesConnectionSort = {
  node?: InputMaybe<ProfileSort>;
};

export type PersonProfilesProfilesConnectionWhere = {
  AND?: InputMaybe<Array<PersonProfilesProfilesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonProfilesProfilesConnectionWhere>>;
  node?: InputMaybe<ProfileWhere>;
  node_NOT?: InputMaybe<ProfileWhere>;
};

export type PersonProfilesProfilesCreateFieldInput = {
  node: ProfileCreateInput;
};

export type PersonProfilesProfilesDeleteFieldInput = {
  where?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
};

export type PersonProfilesProfilesDisconnectFieldInput = {
  where?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
};

export type PersonProfilesProfilesFieldInput = {
  connect?: InputMaybe<Array<PersonProfilesProfilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<PersonProfilesProfilesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<PersonProfilesProfilesCreateFieldInput>>;
};

export type PersonProfilesProfilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonProfilesProfilesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonProfilesProfilesNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  email_EQUAL?: InputMaybe<Scalars['String']>;
  email_GT?: InputMaybe<Scalars['Int']>;
  email_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  email_LT?: InputMaybe<Scalars['Int']>;
  email_LTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  familyName_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  familyName_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  familyName_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  familyName_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  familyName_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  familyName_EQUAL?: InputMaybe<Scalars['String']>;
  familyName_GT?: InputMaybe<Scalars['Int']>;
  familyName_GTE?: InputMaybe<Scalars['Int']>;
  familyName_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  familyName_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  familyName_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  familyName_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  familyName_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  familyName_LT?: InputMaybe<Scalars['Int']>;
  familyName_LTE?: InputMaybe<Scalars['Int']>;
  familyName_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  familyName_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  familyName_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  familyName_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  familyName_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  givenName_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  givenName_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  givenName_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  givenName_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  givenName_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  givenName_EQUAL?: InputMaybe<Scalars['String']>;
  givenName_GT?: InputMaybe<Scalars['Int']>;
  givenName_GTE?: InputMaybe<Scalars['Int']>;
  givenName_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  givenName_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  givenName_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  givenName_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  givenName_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  givenName_LT?: InputMaybe<Scalars['Int']>;
  givenName_LTE?: InputMaybe<Scalars['Int']>;
  givenName_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  givenName_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  givenName_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  givenName_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  givenName_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  nickname_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  nickname_EQUAL?: InputMaybe<Scalars['String']>;
  nickname_GT?: InputMaybe<Scalars['Int']>;
  nickname_GTE?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  nickname_LT?: InputMaybe<Scalars['Int']>;
  nickname_LTE?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  phoneNumber_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  phoneNumber_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  phoneNumber_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  phoneNumber_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  phoneNumber_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  phoneNumber_EQUAL?: InputMaybe<Scalars['String']>;
  phoneNumber_GT?: InputMaybe<Scalars['Int']>;
  phoneNumber_GTE?: InputMaybe<Scalars['Int']>;
  phoneNumber_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  phoneNumber_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  phoneNumber_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  phoneNumber_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  phoneNumber_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  phoneNumber_LT?: InputMaybe<Scalars['Int']>;
  phoneNumber_LTE?: InputMaybe<Scalars['Int']>;
  phoneNumber_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  phoneNumber_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  phoneNumber_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  phoneNumber_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  phoneNumber_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  picture_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  picture_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  picture_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  picture_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  picture_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  picture_EQUAL?: InputMaybe<Scalars['String']>;
  picture_GT?: InputMaybe<Scalars['Int']>;
  picture_GTE?: InputMaybe<Scalars['Int']>;
  picture_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  picture_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  picture_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  picture_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  picture_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  picture_LT?: InputMaybe<Scalars['Int']>;
  picture_LTE?: InputMaybe<Scalars['Int']>;
  picture_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  picture_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  picture_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  picture_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  picture_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type PersonProfilesProfilesRelationship = {
  __typename?: 'PersonProfilesProfilesRelationship';
  cursor: Scalars['String'];
  node: Profile;
};

export type PersonProfilesProfilesUpdateConnectionInput = {
  node?: InputMaybe<ProfileUpdateInput>;
};

export type PersonProfilesProfilesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonProfilesProfilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<PersonProfilesProfilesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<PersonProfilesProfilesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonProfilesProfilesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonProfilesProfilesDisconnectFieldInput>>;
  update?: InputMaybe<PersonProfilesProfilesUpdateConnectionInput>;
  where?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
};

export type PersonProfilesRelationInput = {
  profiles?: InputMaybe<Array<PersonProfilesProfilesCreateFieldInput>>;
};

/** Fields to sort PersonProfiles by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonProfilesSort object. */
export type PersonProfilesSort = {
  id?: InputMaybe<SortDirection>;
};

export type PersonProfilesUpdateInput = {
  profiles?: InputMaybe<Array<PersonProfilesProfilesUpdateFieldInput>>;
};

export type PersonProfilesWhere = {
  AND?: InputMaybe<Array<PersonProfilesWhere>>;
  OR?: InputMaybe<Array<PersonProfilesWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  profilesAggregate?: InputMaybe<PersonProfilesProfilesAggregateInput>;
  profilesConnection_ALL?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
  profilesConnection_NONE?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
  profilesConnection_SINGLE?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
  profilesConnection_SOME?: InputMaybe<PersonProfilesProfilesConnectionWhere>;
  /** Return PersonProfiles where all of the related Profiles match this filter */
  profiles_ALL?: InputMaybe<ProfileWhere>;
  /** Return PersonProfiles where none of the related Profiles match this filter */
  profiles_NONE?: InputMaybe<ProfileWhere>;
  /** Return PersonProfiles where one of the related Profiles match this filter */
  profiles_SINGLE?: InputMaybe<ProfileWhere>;
  /** Return PersonProfiles where some of the related Profiles match this filter */
  profiles_SOME?: InputMaybe<ProfileWhere>;
};

/** Fields to sort Persons by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type PersonUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PersonWhere = {
  AND?: InputMaybe<Array<PersonWhere>>;
  OR?: InputMaybe<Array<PersonWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type PersonsConnection = {
  __typename?: 'PersonsConnection';
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A profile is public information describing a person. */
export type Profile = {
  __typename?: 'Profile';
  /** Timestamp when this Profile was created */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Person's verified email address */
  email?: Maybe<Scalars['String']>;
  /** The person's family name, surname or last name. */
  familyName?: Maybe<Scalars['String']>;
  /** The person's given or first name. */
  givenName?: Maybe<Scalars['String']>;
  /** UUID of this Profile */
  id: Scalars['ID'];
  /**
   * A short, single term name for referring to this person. Often this is a username or handle
   * which is used in '@'-style mentions.
   */
  nickname?: Maybe<Scalars['String']>;
  /** Person's phone number */
  phoneNumber?: Maybe<Scalars['String']>;
  /** URL pointing to a person's profile picture. */
  picture?: Maybe<Scalars['String']>;
  /** Timestamp when this Profile was most recently updated */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProfileAggregateSelection = {
  __typename?: 'ProfileAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  nickname: StringAggregateSelectionNullable;
  phoneNumber: StringAggregateSelectionNullable;
  picture: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ProfileConnectOrCreateWhere = {
  node: ProfileUniqueWhere;
};

export type ProfileConnectWhere = {
  node: ProfileWhere;
};

export type ProfileCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  cursor: Scalars['String'];
  node: Profile;
};

export type ProfileOnCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProfileOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ProfileSort objects to sort Profiles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProfileSort>>;
};

/** Fields to sort Profiles by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProfileSort object. */
export type ProfileSort = {
  createdAt?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  familyName?: InputMaybe<SortDirection>;
  givenName?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  nickname?: InputMaybe<SortDirection>;
  phoneNumber?: InputMaybe<SortDirection>;
  picture?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type ProfileUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProfileUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProfileWhere = {
  AND?: InputMaybe<Array<ProfileWhere>>;
  OR?: InputMaybe<Array<ProfileWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT?: InputMaybe<Scalars['String']>;
  email_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
  familyName_CONTAINS?: InputMaybe<Scalars['String']>;
  familyName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  familyName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  familyName_NOT?: InputMaybe<Scalars['String']>;
  familyName_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  familyName_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  familyName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  familyName_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  familyName_STARTS_WITH?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  givenName_CONTAINS?: InputMaybe<Scalars['String']>;
  givenName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  givenName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  givenName_NOT?: InputMaybe<Scalars['String']>;
  givenName_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  givenName_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  givenName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  givenName_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  givenName_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  nickname?: InputMaybe<Scalars['String']>;
  nickname_CONTAINS?: InputMaybe<Scalars['String']>;
  nickname_ENDS_WITH?: InputMaybe<Scalars['String']>;
  nickname_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nickname_NOT?: InputMaybe<Scalars['String']>;
  nickname_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  nickname_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  nickname_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nickname_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  nickname_STARTS_WITH?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumber_CONTAINS?: InputMaybe<Scalars['String']>;
  phoneNumber_ENDS_WITH?: InputMaybe<Scalars['String']>;
  phoneNumber_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_NOT?: InputMaybe<Scalars['String']>;
  phoneNumber_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  phoneNumber_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  phoneNumber_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phoneNumber_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  phoneNumber_STARTS_WITH?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  picture_CONTAINS?: InputMaybe<Scalars['String']>;
  picture_ENDS_WITH?: InputMaybe<Scalars['String']>;
  picture_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_NOT?: InputMaybe<Scalars['String']>;
  picture_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  picture_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  picture_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  picture_STARTS_WITH?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type ProfilesConnection = {
  __typename?: 'ProfilesConnection';
  edges: Array<ProfileEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  personProfiles: Array<PersonProfiles>;
  personProfilesAggregate: PersonProfilesAggregateSelection;
  personProfilesConnection: PersonProfilesConnection;
  persons: Array<Person>;
  personsAggregate: PersonAggregateSelection;
  personsConnection: PersonsConnection;
  profiles: Array<Profile>;
  profilesAggregate: ProfileAggregateSelection;
  profilesConnection: ProfilesConnection;
};

export type QueryPersonProfilesArgs = {
  options?: InputMaybe<PersonProfilesOptions>;
  where?: InputMaybe<PersonProfilesWhere>;
};

export type QueryPersonProfilesAggregateArgs = {
  where?: InputMaybe<PersonProfilesWhere>;
};

export type QueryPersonProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<PersonProfilesSort>>>;
  where?: InputMaybe<PersonProfilesWhere>;
};

export type QueryPersonsArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};

export type QueryPersonsAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};

export type QueryPersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
  where?: InputMaybe<PersonWhere>;
};

export type QueryProfilesArgs = {
  options?: InputMaybe<ProfileOptions>;
  where?: InputMaybe<ProfileWhere>;
};

export type QueryProfilesAggregateArgs = {
  where?: InputMaybe<ProfileWhere>;
};

export type QueryProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ProfileSort>>>;
  where?: InputMaybe<ProfileWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC',
}

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdatePersonProfilesMutationResponse = {
  __typename?: 'UpdatePersonProfilesMutationResponse';
  info: UpdateInfo;
  personProfiles: Array<PersonProfiles>;
};

export type UpdatePersonsMutationResponse = {
  __typename?: 'UpdatePersonsMutationResponse';
  info: UpdateInfo;
  persons: Array<Person>;
};

export type UpdateProfilesMutationResponse = {
  __typename?: 'UpdateProfilesMutationResponse';
  info: UpdateInfo;
  profiles: Array<Profile>;
};

export type PersonFieldsFragment = {
  __typename?: 'Person';
  id: string;
  name?: string | null;
};

export type PersonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PersonQuery = {
  __typename?: 'Query';
  persons: Array<{ __typename?: 'Person'; id: string; name?: string | null }>;
};

export type PersonsQueryVariables = Exact<{ [key: string]: never }>;

export type PersonsQuery = {
  __typename?: 'Query';
  persons: Array<{ __typename?: 'Person'; id: string; name?: string | null }>;
};

export type CreatePersonMutationVariables = Exact<{
  input: PersonCreateInput;
}>;

export type CreatePersonMutation = {
  __typename?: 'Mutation';
  createPersons: {
    __typename?: 'CreatePersonsMutationResponse';
    persons: Array<{ __typename?: 'Person'; id: string }>;
  };
};

export type RemovePersonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type RemovePersonMutation = {
  __typename?: 'Mutation';
  deletePersons: { __typename?: 'DeleteInfo'; nodesDeleted: number };
};

export type UpdatePersonMutationVariables = Exact<{
  id: Scalars['ID'];
  update?: InputMaybe<PersonUpdateInput>;
}>;

export type UpdatePersonMutation = {
  __typename?: 'Mutation';
  updatePersons: {
    __typename?: 'UpdatePersonsMutationResponse';
    persons: Array<{ __typename?: 'Person'; id: string; name?: string | null }>;
  };
};

export const PersonFieldsFragmentDoc = gql`
  fragment personFields on Person {
    id
    name
  }
`;
export const PersonDocument = gql`
  query person($id: ID!) {
    persons(where: { id: $id }) {
      ...personFields
    }
  }
  ${PersonFieldsFragmentDoc}
`;

/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePersonQuery(
  baseOptions: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PersonQuery, PersonQueryVariables>(
    PersonDocument,
    options
  );
}
export function usePersonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(
    PersonDocument,
    options
  );
}
export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<
  PersonQuery,
  PersonQueryVariables
>;
export const PersonsDocument = gql`
  query persons {
    persons {
      ...personFields
    }
  }
  ${PersonFieldsFragmentDoc}
`;

/**
 * __usePersonsQuery__
 *
 * To run a query within a React component, call `usePersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePersonsQuery(
  baseOptions?: Apollo.QueryHookOptions<PersonsQuery, PersonsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PersonsQuery, PersonsQueryVariables>(
    PersonsDocument,
    options
  );
}
export function usePersonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PersonsQuery, PersonsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PersonsQuery, PersonsQueryVariables>(
    PersonsDocument,
    options
  );
}
export type PersonsQueryHookResult = ReturnType<typeof usePersonsQuery>;
export type PersonsLazyQueryHookResult = ReturnType<typeof usePersonsLazyQuery>;
export type PersonsQueryResult = Apollo.QueryResult<
  PersonsQuery,
  PersonsQueryVariables
>;
export const CreatePersonDocument = gql`
  mutation createPerson($input: PersonCreateInput!) {
    createPersons(input: [$input]) {
      persons {
        id
      }
    }
  }
`;
export type CreatePersonMutationFn = Apollo.MutationFunction<
  CreatePersonMutation,
  CreatePersonMutationVariables
>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePersonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePersonMutation,
    CreatePersonMutationVariables
  >(CreatePersonDocument, options);
}
export type CreatePersonMutationHookResult = ReturnType<
  typeof useCreatePersonMutation
>;
export type CreatePersonMutationResult =
  Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<
  CreatePersonMutation,
  CreatePersonMutationVariables
>;
export const RemovePersonDocument = gql`
  mutation removePerson($id: ID!) {
    deletePersons(where: { id: $id }) {
      nodesDeleted
    }
  }
`;
export type RemovePersonMutationFn = Apollo.MutationFunction<
  RemovePersonMutation,
  RemovePersonMutationVariables
>;

/**
 * __useRemovePersonMutation__
 *
 * To run a mutation, you first call `useRemovePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePersonMutation, { data, loading, error }] = useRemovePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePersonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemovePersonMutation,
    RemovePersonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemovePersonMutation,
    RemovePersonMutationVariables
  >(RemovePersonDocument, options);
}
export type RemovePersonMutationHookResult = ReturnType<
  typeof useRemovePersonMutation
>;
export type RemovePersonMutationResult =
  Apollo.MutationResult<RemovePersonMutation>;
export type RemovePersonMutationOptions = Apollo.BaseMutationOptions<
  RemovePersonMutation,
  RemovePersonMutationVariables
>;
export const UpdatePersonDocument = gql`
  mutation updatePerson($id: ID!, $update: PersonUpdateInput) {
    updatePersons(where: { id: $id }, update: $update) {
      persons {
        ...personFields
      }
    }
  }
  ${PersonFieldsFragmentDoc}
`;
export type UpdatePersonMutationFn = Apollo.MutationFunction<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdatePersonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePersonMutation,
    UpdatePersonMutationVariables
  >(UpdatePersonDocument, options);
}
export type UpdatePersonMutationHookResult = ReturnType<
  typeof useUpdatePersonMutation
>;
export type UpdatePersonMutationResult =
  Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<
  UpdatePersonMutation,
  UpdatePersonMutationVariables
>;
