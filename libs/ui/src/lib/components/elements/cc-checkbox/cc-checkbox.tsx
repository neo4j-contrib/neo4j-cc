import './cc-checkbox.css';

import { Checkbox, CheckboxProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcCheckboxProps extends CheckboxProps {}

export const CcCheckbox = (props:CcCheckboxProps) => (
  <Checkbox {...props} />
)