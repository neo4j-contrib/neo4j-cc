
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { DatasetsQuery, useCreateDatasetMutation, useDatasetsQuery } from '../graphql/generated'

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateDatasetInput')
)

export const DatasetsPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Datasets">
        <p className="mt-1 text-sm text-gray-600">
          A single set of data, usually in the form of downloadable CSV or JSON.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          See:
          <ul>
            - <a href="https://schema.org/Dataset">schema.org/Dataset</a>
          </ul>
        </p>
    </SummaryPanel>

    {pipe(
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateDatasetMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useDatasetsQuery} accessor={(r:DatasetsQuery) => r.datasets} />
  </div>
)

