import React from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { DataCatalogsQuery, useDataCatalogsQuery } from '../services/graphql';

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
    {/* <UserForm /> */}
    <QueryResultTable useQueryHook={useDataCatalogsQuery} accessor={(r:DataCatalogsQuery) => r.dataCatalogs} />

  </div>
)

