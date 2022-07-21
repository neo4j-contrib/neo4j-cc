
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from 'react-daisyui'

import { CcInput, CcInputProps } from './cc-input'

export default {
  component: CcInput,
  title: 'elements/CcInput',
  args: {
    placeholder: 'Type here',
    className: 'w-full max-w-xs',
    disabled: false,
  },
} as Meta;

export const Daisy: Story<InputProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Input {...args} />
    </div>
  )
}

export const Default: Story<CcInputProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcInput {...args} />
    </div>
  )
}

