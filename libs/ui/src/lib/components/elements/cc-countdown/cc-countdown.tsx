import './cc-countdown.css';

import {Countdown, CountdownProps} from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcCountdownProps extends CountdownProps {}

export const CcCountdown = (props:CcCountdownProps) => (
  <Countdown {...props} />
)