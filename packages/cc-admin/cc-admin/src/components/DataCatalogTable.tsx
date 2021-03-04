import React, { Fragment } from 'react'
import { useDataCatalogsQuery } from '../services/graphql'
import { BasicTable } from './BasicTable';


const fields = [
  "id",
  "labels",
  "url",
  "name",
  "description",
  "author",
  "dateCreated",
  "dateModified",
]

export const DataCatalogTable:React.FC = () => {
  const [result, reexecuteQuery] = useDataCatalogsQuery();


  const columns = React.useMemo(
    () => fields.map( f => ({Header:f, accessor:f})),
    []
  )

  const data = React.useMemo(() => (result.data) ? result.data.dataCatalogs : [], [result])

  return (
    <Fragment>
      <BasicTable columns={columns} data={data} />
      <button onClick={reexecuteQuery} type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Refresh
      </button>

    </Fragment>
  )
}