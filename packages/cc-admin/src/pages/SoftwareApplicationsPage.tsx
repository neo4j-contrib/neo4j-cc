import React from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { SoftwareApplicationsQuery, useCreateSoftwareApplicationMutation, useSoftwareApplicationsQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateSoftwareApplicationInput')
)

export const SoftwareApplicationsPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Software Application">
        <p className="mt-1 text-sm text-gray-600">
          A software application.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/SoftwareApplication">schema.org/SoftwareApplication</a>
        </p>
    </SummaryPanel>

    {pipe(
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateSoftwareApplicationMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useSoftwareApplicationsQuery} accessor={(r:SoftwareApplicationsQuery) => r.softwareApplications} />

  </div>
)

