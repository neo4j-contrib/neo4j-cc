
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { OrganizationsQuery, useCreateOrganizationMutation, useOrganizationsQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateOrganizationInput')
)

export const OrganizationsPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Organization">
        <p className="mt-1 text-sm text-gray-600">
        An organization such as a school, NGO, corporation, club, etc.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Organization">schema.org/Organization</a>
        </p>
    </SummaryPanel>

    {pipe(    
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateOrganizationMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useOrganizationsQuery} accessor={(r:OrganizationsQuery) => r.organizations} />
  </div>
)

