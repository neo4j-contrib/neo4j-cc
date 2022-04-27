import { NavLink, NavLinkProps } from 'react-router-dom';

import styles from './cc-navigation.module.scss';

export const CcNavLink:React.FC<NavLinkProps> = (props) => (
  <NavLink {...props} className={(navData) => navData.isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"}>
    {props.children}
  </NavLink>
)
