import './cc-form.css';

import { Form, FormProps } from 'react-daisyui';

/* eslint-disable-next-line */
export interface CcFormProps extends FormProps {}

export const CcForm = (props:CcFormProps) => (
  <Form {...props} />
)

CcForm.Label = Form.Label
