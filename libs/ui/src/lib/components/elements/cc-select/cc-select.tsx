import './cc-select.css';

import { Select, SelectProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcSelectProps<T> extends SelectProps<T> {}

export const CcSelect = <T,>(props:CcSelectProps<T>) => (
  <Select {...props} />
) 

CcSelect.Option = Select.Option
