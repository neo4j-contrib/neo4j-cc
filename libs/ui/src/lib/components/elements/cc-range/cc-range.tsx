import './cc-range.css';

import { Range, RangeProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcRangeProps extends RangeProps {}

export const CcRange = (props:CcRangeProps) => (
  <Range {...props} />
)