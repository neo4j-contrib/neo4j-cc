import './cc-indicator.css';

import { Indicator, IndicatorProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcIndicatorProps extends IndicatorProps {}


export const CcIndicator = (props:CcIndicatorProps) => (
  <Indicator {...props} />
)