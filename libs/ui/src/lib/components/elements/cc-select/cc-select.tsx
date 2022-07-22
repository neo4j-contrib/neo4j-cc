import './cc-select.css';

import React from 'react';

import { Select, SelectProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcSelectProps<T> extends SelectProps<T> {}

export class CcSelect<T> extends React.Component<CcSelectProps<T>> {

  static Option = Select.Option

  render() {
    return (<Select {...this.props} />);
  }
}
