import React from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { PersonsQuery, usePersonsQuery } from '../services/graphql';

export const PeoplePage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="People">
        <p className="mt-1 text-sm text-gray-600">
          A simple entity type used for proof-of-concept work.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Person">schema.org/Person</a>
        </p>
    </SummaryPanel>
    {/* <UserForm /> */}
    <QueryResultTable useQueryHook={usePersonsQuery} accessor={(r:PersonsQuery) => r.persons} />
  </div>
)

