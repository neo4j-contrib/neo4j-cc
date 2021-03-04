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

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user: User;
  dataCatalogs: Array<DataCatalog>;
  dataCatalog: DataCatalog;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryDataCatalogArgs = {
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