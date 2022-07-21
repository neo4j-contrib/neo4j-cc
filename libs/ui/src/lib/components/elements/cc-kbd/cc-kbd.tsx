import './cc-kbd.css';

import { Kbd, KbdProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcKbdProps extends KbdProps {}

export const CcKbd = (props:CcKbdProps) => (
  <Kbd {...props} />
)