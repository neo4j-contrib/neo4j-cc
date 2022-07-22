import './cc-toggle.css';

import { Toggle, ToggleProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcToggleProps extends ToggleProps {}

export const CcToggle = (props:CcToggleProps) => (
  <Toggle {...props} />
)