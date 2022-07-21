import './cc-input.css';

import { Input, InputProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcInputProps extends InputProps {}

export const CcInput = (props:CcInputProps) => (
  <Input {...props} />
)