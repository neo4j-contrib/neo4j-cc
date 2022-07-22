import './cc-text-area.css';

import { Textarea, TextareaProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcTextAreaProps extends TextareaProps {}

export const CcTextArea = (props:CcTextAreaProps) => (
  <Textarea {...props} />
)