import React from 'react'

import {useTable} from "react-table";

import {DebugCell} from './smart-cells';

import {pipe} from 'fp-ts/lib/function';
import { map, reduce } from 'fp-ts/lib/Array';
import { filter } from 'fp-ts/lib/ReadonlyRecord';

const union = <T,>(a:Set<T>, b:Set<T>) => {
  const _union = new Set(a);
  for (let e of b) {
    _union.add(e)
  }
  return _union;
}

export type OccurrenceMap = Record<string,number>

export interface TypicalItem {
  id?: string,
  name?: string,
  title?: string,
  url?: string
  description?: string,
  labels?: string[]
}

export interface SmartListProps {
  /**
   * Renderer for each list item. 
   */
  renderItem?: React.FC<any>,
  items: Array<TypicalItem>,
  debug?: boolean
}

export const SmartList:React.FC<SmartListProps> = (props) => {
  const columns:any = React.useMemo(
    () => [
      {
        accessor: 'item',
        Cell: props.debug ? DebugCell : (props.renderItem || DebugCell),
      }
    ],
    []
  )
  const data:any = React.useMemo(
    () => props.items.map(d => ({item:d })),
     []
   )

  const labels:OccurrenceMap = React.useMemo(
    () => pipe(
      props.items,
      map(item => item.labels),
      reduce({} as OccurrenceMap, (acc, labels) => {
        if (labels !== undefined) labels.forEach((label:string) => {
          const normalizedLabel = label.toLocaleLowerCase();
          acc[normalizedLabel] = (acc[normalizedLabel] !== undefined) ? acc[normalizedLabel] + 1 : 1;
        });
        return acc;
      }),
      filter((freq) => (freq > 1))
    ),
    []
  )
  const tableInstance = useTable({columns, data})

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance;

  console.log('labels', labels);

  return (
 
    // apply the table props
    <div className="relative h-full overflow-y-scroll snap snap-y snap-proximity bg-white bg-opacity-50" {...getTableProps()}>
 
      <div>
 
        {// Loop over the header rows
 
        headerGroups.map(headerGroup => (
 
          // Apply the header row props
 
          <div {...headerGroup.getHeaderGroupProps()}>
 
            {// Loop over the headers in each row
 
            headerGroup.headers.map(column => (
 
              // Apply the header cell props
 
              <div {...column.getHeaderProps()}>
 
                {// Render the header
 
                column.render('Header')}
 
              </div>
 
            ))}
 
          </div>
 
        ))}
 
      </div>
 

        {/* Apply the table body props */}
        <div className="relative h-full flex flex-col space-y-2 mx-2" {...getTableBodyProps()}>
        {// Loop over the table rows
 
        rows.map(row => {
 
          // Prepare the row for display
 
          prepareRow(row)
 
          return (
 
            // Apply the row props
            <div
                {...row.getRowProps()}
                className="snap-start grid grid-cols-1 font-mono h-full"
              >
    
              {// Loop over the rows cells
 
              row.cells.map(cell => {
 
                // Apply the cell props
 
                return (
 
                  <div 
                    {...cell.getCellProps()}
                    className="my-auto"
                  >
 
                    {// Render the cell contents
 
                    cell.render('Cell')}
 
                  </div>
 
                )
 
              })}
 
            </div>
 
          )
 
        })}
 
      </div>
 
    </div>
  );
}
