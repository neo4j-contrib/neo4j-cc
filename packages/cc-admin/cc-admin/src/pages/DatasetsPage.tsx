import React, { Fragment } from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { DatasetsQuery, useDatasetsQuery } from '../services/graphql'

export const DatasetsPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Data Sets">
        <p className="mt-1 text-sm text-gray-600">
          A simple entity type used for proof-of-concept work.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Dataset">schema.org/Dataset</a>
        </p>
    </SummaryPanel>
    {/* <UserForm /> */}
    <QueryResultTable useQueryHook={useDatasetsQuery} accessor={(r:DatasetsQuery) => r.datasets} />
  </div>
)

