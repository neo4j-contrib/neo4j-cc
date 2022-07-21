import './cc-tooltip.css';

import { Tooltip, TooltipProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcTooltipProps extends TooltipProps {}

export const CcTooltip = (props:CcTooltipProps) => (
  <Tooltip {...props} />
)