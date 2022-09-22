import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSONObject: any;
};

export type CreateGraphNodesMutationResponse = {
  __typename?: 'CreateGraphNodesMutationResponse';
  graphNodes: Array<GraphNode>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreatePersonsMutationResponse = {
  __typename?: 'CreatePersonsMutationResponse';
  info: CreateInfo;
  persons: Array<Person>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type GraphNode = {
  __typename?: 'GraphNode';
  _id?: Maybe<Scalars['Int']>;
  _labels: Array<Scalars['String']>;
  _properties: Scalars['JSONObject'];
};

export type GraphNodeAggregateSelection = {
  __typename?: 'GraphNodeAggregateSelection';
  count: Scalars['Int'];
};

export type GraphNodeCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type GraphNodeEdge = {
  __typename?: 'GraphNodeEdge';
  cursor: Scalars['String'];
  node: GraphNode;
};

export type GraphNodeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more GraphNodeSort objects to sort GraphNodes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GraphNodeSort>>;
};

/** Fields to sort GraphNodes by. The order in which sorts are applied is not guaranteed when specifying many fields in one GraphNodeSort object. */
export type GraphNodeSort = {
  _id?: InputMaybe<SortDirection>;
};

export type GraphNodeUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type GraphNodeWhere = {
  AND?: InputMaybe<Array<GraphNodeWhere>>;
  OR?: InputMaybe<Array<GraphNodeWhere>>;
};

export type GraphNodesConnection = {
  __typename?: 'GraphNodesConnection';
  edges: Array<GraphNodeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGraphNodes: CreateGraphNodesMutationResponse;
  createNode?: Maybe<GraphNode>;
  createPersons: CreatePersonsMutationResponse;
  deleteGraphNodes: DeleteInfo;
  deletePersons: DeleteInfo;
  updateGraphNodes: UpdateGraphNodesMutationResponse;
  updatePersons: UpdatePersonsMutationResponse;
};


export type MutationCreateGraphNodesArgs = {
  input: Array<GraphNodeCreateInput>;
};


export type MutationCreateNodeArgs = {
  labels: Array<Scalars['String']>;
  properties?: InputMaybe<Scalars['JSONObject']>;
};


export type MutationCreatePersonsArgs = {
  input: Array<PersonCreateInput>;
};


export type MutationDeleteGraphNodesArgs = {
  where?: InputMaybe<GraphNodeWhere>;
};


export type MutationDeletePersonsArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type MutationUpdateGraphNodesArgs = {
  update?: InputMaybe<GraphNodeUpdateInput>;
  where?: InputMaybe<GraphNodeWhere>;
};


export type MutationUpdatePersonsArgs = {
  update?: InputMaybe<PersonUpdateInput>;
  where?: InputMaybe<PersonWhere>;
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

export type Query = {
  __typename?: 'Query';
  /** Matches and retrieves all graph nodes regardless of label (even un-labeled nodes). */
  allGraphNodes?: Maybe<Array<Maybe<GraphNode>>>;
  graphNodes: Array<GraphNode>;
  graphNodesAggregate: GraphNodeAggregateSelection;
  graphNodesConnection: GraphNodesConnection;
  oneGraphNode?: Maybe<GraphNode>;
  persons: Array<Person>;
  personsAggregate: PersonAggregateSelection;
  personsConnection: PersonsConnection;
};


export type QueryGraphNodesArgs = {
  options?: InputMaybe<GraphNodeOptions>;
  where?: InputMaybe<GraphNodeWhere>;
};


export type QueryGraphNodesAggregateArgs = {
  where?: InputMaybe<GraphNodeWhere>;
};


export type QueryGraphNodesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GraphNodeSort>>>;
  where?: InputMaybe<GraphNodeWhere>;
};


export type QueryOneGraphNodeArgs = {
  id: Scalars['Int'];
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

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type UpdateGraphNodesMutationResponse = {
  __typename?: 'UpdateGraphNodesMutationResponse';
  graphNodes: Array<GraphNode>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdatePersonsMutationResponse = {
  __typename?: 'UpdatePersonsMutationResponse';
  info: UpdateInfo;
  persons: Array<Person>;
};

export type GraphNodeFieldsFragment = { __typename?: 'GraphNode', _id?: number | null, _labels: Array<string>, _properties: any };

export type CreateGraphNodeMutationVariables = Exact<{
  input: GraphNodeCreateInput;
}>;


export type CreateGraphNodeMutation = { __typename?: 'Mutation', createGraphNodes: { __typename?: 'CreateGraphNodesMutationResponse', graphNodes: Array<{ __typename?: 'GraphNode', _id?: number | null, _labels: Array<string>, _properties: any }> } };

export type GetGraphNodeQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetGraphNodeQuery = { __typename?: 'Query', oneGraphNode?: { __typename?: 'GraphNode', _id?: number | null, _labels: Array<string>, _properties: any } | null };

export type PersonFieldsFragment = { __typename?: 'Person', id: string, name?: string | null };

export type PersonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PersonQuery = { __typename?: 'Query', persons: Array<{ __typename?: 'Person', id: string, name?: string | null }> };

export type PersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonsQuery = { __typename?: 'Query', persons: Array<{ __typename?: 'Person', id: string, name?: string | null }> };

export type CreatePersonMutationVariables = Exact<{
  input: PersonCreateInput;
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPersons: { __typename?: 'CreatePersonsMutationResponse', persons: Array<{ __typename?: 'Person', id: string }> } };

export type RemovePersonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemovePersonMutation = { __typename?: 'Mutation', deletePersons: { __typename?: 'DeleteInfo', nodesDeleted: number } };

export type UpdatePersonMutationVariables = Exact<{
  id: Scalars['ID'];
  update?: InputMaybe<PersonUpdateInput>;
}>;


export type UpdatePersonMutation = { __typename?: 'Mutation', updatePersons: { __typename?: 'UpdatePersonsMutationResponse', persons: Array<{ __typename?: 'Person', id: string, name?: string | null }> } };

export const GraphNodeFieldsFragmentDoc = gql`
    fragment graphNodeFields on GraphNode {
  _id
  _labels
  _properties
}
    `;
export const PersonFieldsFragmentDoc = gql`
    fragment personFields on Person {
  id
  name
}
    `;
export const CreateGraphNodeDocument = gql`
    mutation createGraphNode($input: GraphNodeCreateInput!) {
  createGraphNodes(input: [$input]) {
    graphNodes {
      ...graphNodeFields
    }
  }
}
    ${GraphNodeFieldsFragmentDoc}`;
export type CreateGraphNodeMutationFn = Apollo.MutationFunction<CreateGraphNodeMutation, CreateGraphNodeMutationVariables>;

/**
 * __useCreateGraphNodeMutation__
 *
 * To run a mutation, you first call `useCreateGraphNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGraphNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGraphNodeMutation, { data, loading, error }] = useCreateGraphNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGraphNodeMutation(baseOptions?: Apollo.MutationHookOptions<CreateGraphNodeMutation, CreateGraphNodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGraphNodeMutation, CreateGraphNodeMutationVariables>(CreateGraphNodeDocument, options);
      }
export type CreateGraphNodeMutationHookResult = ReturnType<typeof useCreateGraphNodeMutation>;
export type CreateGraphNodeMutationResult = Apollo.MutationResult<CreateGraphNodeMutation>;
export type CreateGraphNodeMutationOptions = Apollo.BaseMutationOptions<CreateGraphNodeMutation, CreateGraphNodeMutationVariables>;
export const GetGraphNodeDocument = gql`
    query getGraphNode($id: Int!) {
  oneGraphNode(id: $id) {
    ...graphNodeFields
  }
}
    ${GraphNodeFieldsFragmentDoc}`;

/**
 * __useGetGraphNodeQuery__
 *
 * To run a query within a React component, call `useGetGraphNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGraphNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGraphNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGraphNodeQuery(baseOptions: Apollo.QueryHookOptions<GetGraphNodeQuery, GetGraphNodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGraphNodeQuery, GetGraphNodeQueryVariables>(GetGraphNodeDocument, options);
      }
export function useGetGraphNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGraphNodeQuery, GetGraphNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGraphNodeQuery, GetGraphNodeQueryVariables>(GetGraphNodeDocument, options);
        }
export type GetGraphNodeQueryHookResult = ReturnType<typeof useGetGraphNodeQuery>;
export type GetGraphNodeLazyQueryHookResult = ReturnType<typeof useGetGraphNodeLazyQuery>;
export type GetGraphNodeQueryResult = Apollo.QueryResult<GetGraphNodeQuery, GetGraphNodeQueryVariables>;
export const PersonDocument = gql`
    query person($id: ID!) {
  persons(where: {id: $id}) {
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
export const CreatePersonDocument = gql`
    mutation createPerson($input: PersonCreateInput!) {
  createPersons(input: [$input]) {
    persons {
      id
    }
  }
}
    `;
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
export const RemovePersonDocument = gql`
    mutation removePerson($id: ID!) {
  deletePersons(where: {id: $id}) {
    nodesDeleted
  }
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
    mutation updatePerson($id: ID!, $update: PersonUpdateInput) {
  updatePersons(where: {id: $id}, update: $update) {
    persons {
      ...personFields
    }
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
 *      update: // value for 'update'
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