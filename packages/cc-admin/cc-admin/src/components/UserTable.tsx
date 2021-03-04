import React, { Fragment } from 'react'
import { useUsersQuery } from '../services/graphql'
import { BasicTable } from './BasicTable';


export const UserTable:React.FC = () => {
  const [result, reexecuteQuery] = useUsersQuery();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => (result.data) ? result.data.users : [], [result])

  return (
    <Fragment>
      <BasicTable columns={columns} data={data} />
      <button onClick={reexecuteQuery} type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Refresh
      </button>

    </Fragment>
  )
}