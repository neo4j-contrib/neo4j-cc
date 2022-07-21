import './cc-radial-progress.css';

import { RadialProgress, RadialProgressProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcRadialProgressProps extends RadialProgressProps {}

export const CcRadialProgress = (props:CcRadialProgressProps) => (
  <RadialProgress {...props} />
)