import React, { Fragment } from 'react';
import { DataCatalogTable } from './components/DataCatalogTable';
import { SummaryPanel } from './components/SummaryPanel';

const DataCatalogPage = () => (
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
    <DataCatalogTable />
  </div>
)

export default DataCatalogPage;
