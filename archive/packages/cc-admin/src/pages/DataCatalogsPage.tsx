
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { DataCatalogsQuery, useCreateDataCatalogMutation, useDataCatalogsQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateDataCatalogInput')
)

export const DataCatalogsPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Data Catalog">
        <p className="mt-1 text-sm text-gray-600">
          A simple entity type used for proof-of-concept work.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/DataCatalog">schema.org/DataCatalog</a>
        </p>
    </SummaryPanel>

    {pipe(
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateDataCatalogMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useDataCatalogsQuery} accessor={(r:DataCatalogsQuery) => r.dataCatalogs} />

  </div>
)

