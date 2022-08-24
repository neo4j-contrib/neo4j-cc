import './cc-navbar.css';

import { Navbar, NavbarProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcNavbarProps extends NavbarProps {}

export const CcNavbar = (props:CcNavbarProps) => (
  <Navbar {...props} />
)
  
CcNavbar.Start = Navbar.Start
CcNavbar.End = Navbar.End
CcNavbar.Center = Navbar.Center