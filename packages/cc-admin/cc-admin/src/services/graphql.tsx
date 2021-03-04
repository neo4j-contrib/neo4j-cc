import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type DataCatalog = {
  __typename?: 'DataCatalog';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
};

export type Dataset = {
  __typename?: 'Dataset';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** URL to the direct data download. Distinct from the optional "url" field, which should lead to a page about the data. */
  distribution: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user: User;
  dataCatalogs: Array<DataCatalog>;
  dataCatalog: DataCatalog;
  datasets: Array<Dataset>;
  dataset: Dataset;
  persons: Array<Person>;
  person: Person;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryDataCatalogArgs = {
  id: Scalars['ID'];
};


export type QueryDatasetArgs = {
  id: Scalars['ID'];
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  removeUser: Scalars['Boolean'];
  createDataCatalog: DataCatalog;
  updateDataCatalog: DataCatalog;
  removeDataCatalog: Scalars['Boolean'];
  createDataset: Dataset;
  updateDataset: Dataset;
  removeDataset: Scalars['Boolean'];
  createPerson: Person;
  updatePerson: Person;
  removePerson: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDataCatalogArgs = {
  createDataCatalogInput: CreateDataCatalogInput;
};


export type MutationUpdateDataCatalogArgs = {
  updateDataCatalogInput: UpdateDataCatalogInput;
};


export type MutationRemoveDataCatalogArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDatasetArgs = {
  createDatasetInput: CreateDatasetInput;
};


export type MutationUpdateDatasetArgs = {
  updateDatasetInput: UpdateDatasetInput;
};


export type MutationRemoveDatasetArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePersonArgs = {
  createPersonInput: CreatePersonInput;
};


export type MutationUpdatePersonArgs = {
  updatePersonInput: UpdatePersonInput;
};


export type MutationRemovePersonArgs = {
  id: Scalars['ID'];
};

export type CreateUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateDataCatalogInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
};

export type UpdateDataCatalogInput = {
  /** UUID */
  id?: Maybe<Scalars['ID']>;
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
};

export type CreateDatasetInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** URL to the direct data download. Distinct from the optional "url" field, which should lead to a page about the data. */
  distribution?: Maybe<Scalars['String']>;
};

export type UpdateDatasetInput = {
  /** UUID */
  id?: Maybe<Scalars['ID']>;
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** URL to the direct data download. Distinct from the optional "url" field, which should lead to a page about the data. */
  distribution?: Maybe<Scalars['String']>;
};

export type CreatePersonInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type UpdatePersonInput = {
  /** UUID */
  id?: Maybe<Scalars['ID']>;
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type CreateDataCatalogMutationVariables = Exact<{
  input: CreateDataCatalogInput;
}>;


export type CreateDataCatalogMutation = (
  { __typename?: 'Mutation' }
  & { createDataCatalog: (
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'name' | 'url' | 'description' | 'author' | 'dateCreated' | 'dateModified' | 'license'>
  ) }
);

export type GetDataCatalogQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDataCatalogQuery = (
  { __typename?: 'Query' }
  & { dataCatalog: (
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'name' | 'url' | 'description' | 'author' | 'dateCreated' | 'dateModified' | 'license'>
  ) }
);

export type DataCatalogsQueryVariables = Exact<{ [key: string]: never; }>;


export type DataCatalogsQuery = (
  { __typename?: 'Query' }
  & { dataCatalogs: Array<(
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'url' | 'name' | 'description' | 'author' | 'dateCreated' | 'dateModified'>
  )> }
);

export type RemoveDataCatalogMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveDataCatalogMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeDataCatalog'>
);

export type UpdateDataCatalogMutationVariables = Exact<{
  input: UpdateDataCatalogInput;
}>;


export type UpdateDataCatalogMutation = (
  { __typename?: 'Mutation' }
  & { updateDataCatalog: (
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'url' | 'name' | 'description' | 'author' | 'dateCreated' | 'dateModified'>
  ) }
);

export type CreateDatasetMutationVariables = Exact<{
  input: CreateDatasetInput;
}>;


export type CreateDatasetMutation = (
  { __typename?: 'Mutation' }
  & { createDataset: (
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'url' | 'labels' | 'name' | 'description' | 'author' | 'dateCreated' | 'dateModified' | 'license' | 'distribution'>
  ) }
);

export type GetDatasetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDatasetQuery = (
  { __typename?: 'Query' }
  & { dataset: (
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'url' | 'labels' | 'name' | 'description' | 'author' | 'dateCreated' | 'dateModified' | 'license' | 'distribution'>
  ) }
);

export type DatasetsQueryVariables = Exact<{ [key: string]: never; }>;


export type DatasetsQuery = (
  { __typename?: 'Query' }
  & { datasets: Array<(
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'url' | 'labels' | 'name' | 'description' | 'author' | 'dateCreated' | 'dateModified' | 'license' | 'distribution'>
  )> }
);

export type RemoveDatasetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveDatasetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeDataset'>
);

export type UpdateDatasetMutationVariables = Exact<{
  input: UpdateDatasetInput;
}>;


export type UpdateDatasetMutation = (
  { __typename?: 'Mutation' }
  & { updateDataset: (
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'labels' | 'url' | 'name' | 'description' | 'author' | 'dateCreated' | 'dateModified' | 'distribution'>
  ) }
);

export type CreatePersonMutationVariables = Exact<{
  input: CreatePersonInput;
}>;


export type CreatePersonMutation = (
  { __typename?: 'Mutation' }
  & { createPerson: (
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'url' | 'labels' | 'name' | 'callSign' | 'email'>
  ) }
);

export type PersonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PersonQuery = (
  { __typename?: 'Query' }
  & { person: (
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'url' | 'labels' | 'name' | 'email' | 'callSign'>
  ) }
);

export type PersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonsQuery = (
  { __typename?: 'Query' }
  & { persons: Array<(
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'url' | 'labels' | 'name' | 'email' | 'callSign'>
  )> }
);

export type RemovePersonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemovePersonMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removePerson'>
);

export type UpdatePersonMutationVariables = Exact<{
  input: UpdatePersonInput;
}>;


export type UpdatePersonMutation = (
  { __typename?: 'Mutation' }
  & { updatePerson: (
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'url' | 'labels' | 'name' | 'email' | 'callSign'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'isActive' | 'id'>
  ) }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'isActive'>
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'isActive'>
  )> }
);

export type RemoveUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeUser'>
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'isActive'>
  ) }
);


export const CreateDataCatalogDocument = gql`
    mutation createDataCatalog($input: CreateDataCatalogInput!) {
  createDataCatalog(createDataCatalogInput: $input) {
    id
    labels
    name
    url
    description
    author
    dateCreated
    dateModified
    license
  }
}
    `;

export function useCreateDataCatalogMutation() {
  return Urql.useMutation<CreateDataCatalogMutation, CreateDataCatalogMutationVariables>(CreateDataCatalogDocument);
};
export const GetDataCatalogDocument = gql`
    query getDataCatalog($id: ID!) {
  dataCatalog(id: $id) {
    id
    labels
    name
    url
    description
    author
    dateCreated
    dateModified
    license
  }
}
    `;

export function useGetDataCatalogQuery(options: Omit<Urql.UseQueryArgs<GetDataCatalogQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetDataCatalogQuery>({ query: GetDataCatalogDocument, ...options });
};
export const DataCatalogsDocument = gql`
    query dataCatalogs {
  dataCatalogs {
    id
    labels
    url
    name
    description
    author
    dateCreated
    dateModified
  }
}
    `;

export function useDataCatalogsQuery(options: Omit<Urql.UseQueryArgs<DataCatalogsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DataCatalogsQuery>({ query: DataCatalogsDocument, ...options });
};
export const RemoveDataCatalogDocument = gql`
    mutation removeDataCatalog($id: ID!) {
  removeDataCatalog(id: $id)
}
    `;

export function useRemoveDataCatalogMutation() {
  return Urql.useMutation<RemoveDataCatalogMutation, RemoveDataCatalogMutationVariables>(RemoveDataCatalogDocument);
};
export const UpdateDataCatalogDocument = gql`
    mutation updateDataCatalog($input: UpdateDataCatalogInput!) {
  updateDataCatalog(updateDataCatalogInput: $input) {
    id
    labels
    url
    name
    description
    author
    dateCreated
    dateModified
  }
}
    `;

export function useUpdateDataCatalogMutation() {
  return Urql.useMutation<UpdateDataCatalogMutation, UpdateDataCatalogMutationVariables>(UpdateDataCatalogDocument);
};
export const CreateDatasetDocument = gql`
    mutation createDataset($input: CreateDatasetInput!) {
  createDataset(createDatasetInput: $input) {
    id
    url
    labels
    name
    description
    author
    dateCreated
    dateModified
    license
    distribution
  }
}
    `;

export function useCreateDatasetMutation() {
  return Urql.useMutation<CreateDatasetMutation, CreateDatasetMutationVariables>(CreateDatasetDocument);
};
export const GetDatasetDocument = gql`
    query getDataset($id: ID!) {
  dataset(id: $id) {
    id
    url
    labels
    name
    description
    author
    dateCreated
    dateModified
    license
    distribution
  }
}
    `;

export function useGetDatasetQuery(options: Omit<Urql.UseQueryArgs<GetDatasetQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetDatasetQuery>({ query: GetDatasetDocument, ...options });
};
export const DatasetsDocument = gql`
    query datasets {
  datasets {
    id
    url
    labels
    name
    description
    author
    dateCreated
    dateModified
    license
    distribution
  }
}
    `;

export function useDatasetsQuery(options: Omit<Urql.UseQueryArgs<DatasetsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DatasetsQuery>({ query: DatasetsDocument, ...options });
};
export const RemoveDatasetDocument = gql`
    mutation removeDataset($id: ID!) {
  removeDataset(id: $id)
}
    `;

export function useRemoveDatasetMutation() {
  return Urql.useMutation<RemoveDatasetMutation, RemoveDatasetMutationVariables>(RemoveDatasetDocument);
};
export const UpdateDatasetDocument = gql`
    mutation updateDataset($input: UpdateDatasetInput!) {
  updateDataset(updateDatasetInput: $input) {
    id
    labels
    url
    name
    description
    author
    dateCreated
    dateModified
    distribution
  }
}
    `;

export function useUpdateDatasetMutation() {
  return Urql.useMutation<UpdateDatasetMutation, UpdateDatasetMutationVariables>(UpdateDatasetDocument);
};
export const CreatePersonDocument = gql`
    mutation createPerson($input: CreatePersonInput!) {
  createPerson(createPersonInput: $input) {
    id
    url
    labels
    name
    callSign
    email
  }
}
    `;

export function useCreatePersonMutation() {
  return Urql.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument);
};
export const PersonDocument = gql`
    query person($id: ID!) {
  person(id: $id) {
    id
    url
    labels
    name
    email
    callSign
  }
}
    `;

export function usePersonQuery(options: Omit<Urql.UseQueryArgs<PersonQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PersonQuery>({ query: PersonDocument, ...options });
};
export const PersonsDocument = gql`
    query persons {
  persons {
    id
    url
    labels
    name
    email
    callSign
  }
}
    `;

export function usePersonsQuery(options: Omit<Urql.UseQueryArgs<PersonsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PersonsQuery>({ query: PersonsDocument, ...options });
};
export const RemovePersonDocument = gql`
    mutation removePerson($id: ID!) {
  removePerson(id: $id)
}
    `;

export function useRemovePersonMutation() {
  return Urql.useMutation<RemovePersonMutation, RemovePersonMutationVariables>(RemovePersonDocument);
};
export const UpdatePersonDocument = gql`
    mutation updatePerson($input: UpdatePersonInput!) {
  updatePerson(updatePersonInput: $input) {
    id
    url
    labels
    name
    email
    callSign
  }
}
    `;

export function useUpdatePersonMutation() {
  return Urql.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument);
};
export const CreateUserDocument = gql`
    mutation createUser($firstName: String!, $lastName: String) {
  createUser(createUserInput: {firstName: $firstName, lastName: $lastName}) {
    firstName
    lastName
    isActive
    id
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  user(id: $id) {
    id
    firstName
    lastName
    isActive
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
};
export const UsersDocument = gql`
    query users {
  users {
    id
    firstName
    lastName
    isActive
  }
}
    `;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};
export const RemoveUserDocument = gql`
    mutation removeUser($id: ID!) {
  removeUser(id: $id)
}
    `;

export function useRemoveUserMutation() {
  return Urql.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(RemoveUserDocument);
};
export const UpdateUserDocument = gql`
    mutation updateUser($id: ID!, $firstName: String, $lastName: String, $isActive: Boolean) {
  updateUser(
    updateUserInput: {id: $id, firstName: $firstName, lastName: $lastName, isActive: $isActive}
  ) {
    id
    firstName
    lastName
    isActive
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};