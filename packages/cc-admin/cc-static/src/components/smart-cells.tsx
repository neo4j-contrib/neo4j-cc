import React from 'react';

import {CellProps} from 'react-table';

import {stringify} from 'flatted';

export const TextCell:React.FC<{value:string|number}> = ({value}) => <p className="bg-blue-200 h-full overflow-hidden p-1">{value}</p>

export const DebugCell:React.FC<CellProps<any>> = (cellProps) => <p className="bg-red-400 h-48 overflow-scroll p-1">{stringify(cellProps.cell)}</p>
