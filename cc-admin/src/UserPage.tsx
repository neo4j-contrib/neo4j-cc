import React from 'react';
import { SummaryPanel } from './components/SummaryPanel';
import { UserForm } from './components/UserForm';
import { UserTable } from './components/UserTable';


const UserPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Users">
      <p className="mt-1 text-sm text-gray-600">
        A simple entity type used for proof-of-concept work.
      </p>
    </SummaryPanel>
    <UserForm />
    <UserTable />
  </div>
)

export default UserPage;
