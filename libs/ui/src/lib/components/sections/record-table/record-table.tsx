import './record-table.module.scss';

import React from 'react'
import { useTable } from 'react-table';

/* eslint-disable-next-line */
export interface RecordTableProps {
  records: Record<string, unknown>[]
}

/**
 * A record table is a generic table
 * @param props RecordTableProps
 * @returns 
 */
export function RecordTable(props: RecordTableProps) {
  const data = React.useMemo(() => (props.records) || [], [props.records])

  const columns = React.useMemo(
    () => (data.length > 0) ? Object.keys(data[0]).filter(f => !f.startsWith("_")).map( f => ({Header:f, accessor:f})) : [],
    [data]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data, 
  })
  
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                  {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                {rows.map((row) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecordTable;

