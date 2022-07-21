import './cc-progress.css';

import { Progress, ProgressProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcProgressProps extends ProgressProps {}

export const CcProgress = (props:CcProgressProps) => (
  <Progress {...props} />
)