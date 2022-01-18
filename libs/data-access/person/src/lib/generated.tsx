import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePersonInput = {
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: InputMaybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: InputMaybe<Scalars['String']>;
  /** Primary email address */
  email?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPerson: Person;
  removePerson: Scalars['Boolean'];
  updatePerson: Person;
};


export type MutationCreatePersonArgs = {
  createPersonInput: CreatePersonInput;
};


export type MutationRemovePersonArgs = {
  id: Scalars['ID'];
};


export type MutationUpdatePersonArgs = {
  id: Scalars['ID'];
  updatePersonInput: UpdatePersonInput;
};

export type Person = {
  __typename?: 'Person';
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  person: Person;
  persons: Array<Person>;
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};

export type UpdatePersonInput = {
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: InputMaybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: InputMaybe<Scalars['String']>;
  /** Primary email address */
  email?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CreatePersonMutationVariables = Exact<{
  input: CreatePersonInput;
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPerson: { __typename?: 'Person', id: string, url?: string | null | undefined, labels?: Array<string> | null | undefined, name?: string | null | undefined, description?: string | null | undefined, callSign?: string | null | undefined, email?: string | null | undefined } };

export type PersonFieldsFragment = { __typename?: 'Person', id: string, url?: string | null | undefined, labels?: Array<string> | null | undefined, name?: string | null | undefined, description?: string | null | undefined, callSign?: string | null | undefined, email?: string | null | undefined };

export type PersonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PersonQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, url?: string | null | undefined, labels?: Array<string> | null | undefined, name?: string | null | undefined, description?: string | null | undefined, callSign?: string | null | undefined, email?: string | null | undefined } };

export type PersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonsQuery = { __typename?: 'Query', persons: Array<{ __typename?: 'Person', id: string, url?: string | null | undefined, labels?: Array<string> | null | undefined, name?: string | null | undefined, description?: string | null | undefined, callSign?: string | null | undefined, email?: string | null | undefined }> };

export type RemovePersonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemovePersonMutation = { __typename?: 'Mutation', removePerson: boolean };

export type UpdatePersonMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePersonInput;
}>;


export type UpdatePersonMutation = { __typename?: 'Mutation', updatePerson: { __typename?: 'Person', id: string, url?: string | null | undefined, labels?: Array<string> | null | undefined, name?: string | null | undefined, description?: string | null | undefined, callSign?: string | null | undefined, email?: string | null | undefined } };

export const PersonFieldsFragmentDoc = gql`
    fragment personFields on Person {
  id
  url
  labels
  name
  description
  callSign
  email
}
    `;
export const CreatePersonDocument = gql`
    mutation createPerson($input: CreatePersonInput!) {
  createPerson(createPersonInput: $input) {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

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
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const PersonDocument = gql`
    query person($id: ID!) {
  person(id: $id) {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;

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
export function usePersonQuery(baseOptions: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
      }
export function usePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
        }
export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<PersonQuery, PersonQueryVariables>;
export const PersonsDocument = gql`
    query persons {
  persons {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;

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
export function usePersonsQuery(baseOptions?: Apollo.QueryHookOptions<PersonsQuery, PersonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonsQuery, PersonsQueryVariables>(PersonsDocument, options);
      }
export function usePersonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonsQuery, PersonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonsQuery, PersonsQueryVariables>(PersonsDocument, options);
        }
export type PersonsQueryHookResult = ReturnType<typeof usePersonsQuery>;
export type PersonsLazyQueryHookResult = ReturnType<typeof usePersonsLazyQuery>;
export type PersonsQueryResult = Apollo.QueryResult<PersonsQuery, PersonsQueryVariables>;
export const RemovePersonDocument = gql`
    mutation removePerson($id: ID!) {
  removePerson(id: $id)
}
    `;
export type RemovePersonMutationFn = Apollo.MutationFunction<RemovePersonMutation, RemovePersonMutationVariables>;

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
export function useRemovePersonMutation(baseOptions?: Apollo.MutationHookOptions<RemovePersonMutation, RemovePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePersonMutation, RemovePersonMutationVariables>(RemovePersonDocument, options);
      }
export type RemovePersonMutationHookResult = ReturnType<typeof useRemovePersonMutation>;
export type RemovePersonMutationResult = Apollo.MutationResult<RemovePersonMutation>;
export type RemovePersonMutationOptions = Apollo.BaseMutationOptions<RemovePersonMutation, RemovePersonMutationVariables>;
export const UpdatePersonDocument = gql`
    mutation updatePerson($id: ID!, $input: UpdatePersonInput!) {
  updatePerson(id: $id, updatePersonInput: $input) {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
      }
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;