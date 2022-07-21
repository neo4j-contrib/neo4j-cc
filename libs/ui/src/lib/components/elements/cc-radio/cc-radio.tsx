import './cc-radio.css';

import { Radio, RadioProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcRadioProps extends RadioProps {}

export const CcRadio = (props:CcRadioProps) => (
  <Radio {...props} />
)