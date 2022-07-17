import './cc-dropdown.css';

import * as React from 'react'

import { Dropdown, DropdownProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcDropdownProps extends DropdownProps {}

export class CcDropdown extends React.Component<CcDropdownProps> {

  static Toggle = Dropdown.Toggle
  static Menu = Dropdown.Menu
  static Item = Dropdown.Item

  render() {
    return (<Dropdown {...this.props} />);
  }
}

