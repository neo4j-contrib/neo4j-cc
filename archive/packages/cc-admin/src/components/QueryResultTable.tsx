import React, { Fragment, PropsWithChildren } from 'react'
import { UseQueryState } from 'urql';
import { BasicTable } from './BasicTable';

export interface QueryResultTableProps<T, D> {
  useQueryHook: () => [UseQueryState<T, object>, () => void]
  accessor: (r:T) => D[]
}

export const QueryResultTable = <T,D>({useQueryHook, accessor}:PropsWithChildren<QueryResultTableProps<T,D>>) => {
  const [result, reexecuteQuery] = useQueryHook();

  const data = React.useMemo(() => (result.data) ? accessor(result.data) : [], [result, accessor])

  const columns = React.useMemo(
    () => (data.length > 0) ? Object.keys(data[0]).filter(f => !f.startsWith("_")).map( f => ({Header:f, accessor:f})) : [],
    [data]
  )

  return (
    <Fragment>
      <BasicTable columns={columns} data={data} />
      <button onClick={reexecuteQuery} type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Refresh
      </button>
    </Fragment>
  )
}