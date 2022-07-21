import './cc-form.css';

import React from 'react';

import { Form, FormProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcFormProps extends FormProps {}

export class CcForm extends React.Component<CcFormProps> {

  static Label = Form.Label

  render() {
    return (<Form {...this.props} />);
  }
}
