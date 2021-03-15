
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { SoftwareSourceCodesQuery, useCreateSoftwareSourceCodeMutation, useSoftwareSourceCodesQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateSoftwareSourceCodeInput')
)

export const SoftwareSourceCodesPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Software SourceCode">
        <p className="mt-1 text-sm text-gray-600">
        Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/SoftwareSourceCode">schema.org/SoftwareSourceCode</a>
        </p>
    </SummaryPanel>

    {pipe(
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateSoftwareSourceCodeMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useSoftwareSourceCodesQuery} accessor={(r:SoftwareSourceCodesQuery) => r.softwareSourceCodes} />

  </div>
)

