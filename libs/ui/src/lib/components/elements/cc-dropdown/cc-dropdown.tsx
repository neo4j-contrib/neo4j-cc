import './cc-dropdown.css';

import { Dropdown, DropdownProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcDropdownProps extends DropdownProps {}

export const CcDropdown =(props:CcDropdownProps) => (
  <Dropdown {...props} />
);

CcDropdown.Toggle = Dropdown.Toggle
CcDropdown.Menu = Dropdown.Menu
CcDropdown.Item = Dropdown.Item
