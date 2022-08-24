import './cc-menu.css';

import { Menu, MenuProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcMenuProps extends MenuProps {}

export const CcMenu = (props:CcMenuProps) => (
  <Menu {...props} />
)
  
CcMenu.Item = Menu.Item
