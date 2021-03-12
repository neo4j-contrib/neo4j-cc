import React from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { PersonsQuery, useCreatePersonMutation, usePersonsQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreatePersonInput')
)

export const PeoplePage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="People">
        <p className="mt-1 text-sm text-gray-600">
          An identifiable person, regardless of roles like user, staff, etc.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Person">schema.org/Person</a>
        </p>
    </SummaryPanel>

    {pipe(    
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreatePersonMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={usePersonsQuery} accessor={(r:PersonsQuery) => r.persons} />
  </div>
)

