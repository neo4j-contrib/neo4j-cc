import React from 'react'

import {useTable} from "react-table";

import {DebugCell} from './smart-cells';

export interface SmartListProps {
  /**
   * Renderer for each list item. 
   */
  renderItem?: React.FC<any>,
  items: any[],
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
  const tableInstance = useTable({columns, data})

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance;

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
