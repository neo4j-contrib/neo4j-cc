
import { Story, Meta } from '@storybook/react';

import { Select, SelectProps } from 'react-daisyui'

import { CcSelect, CcSelectProps } from './cc-select'

const { Option } = Select

const { Option:CcOption } = CcSelect

export default {
  component: CcSelect,
  title: 'elements/CcSelect',
  args: {
    className: 'w-full max-w-xs',
    disabled: false,
  },
} as Meta;

export const Daisy: Story<SelectProps<string>> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Select {...args}>
        <Option value={undefined} disabled selected>
          Pick your favorite Simpson
        </Option>
        <Option value={'Homer'}>Homer</Option>
        <Option value={'Marge'}>Marge</Option>
        <Option value={'Bart'}>Bart</Option>
        <Option value={'Lisa'}>Lisa</Option>
        <Option value={'Maggie'}>Maggie</Option>
      </Select>
    </div>
  )
}


export const Default: Story<CcSelectProps<string>> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcSelect {...args}>
        <CcOption value={undefined} disabled selected>
          Pick your favorite Simpson
        </CcOption>
        <CcOption value={'Homer'}>Homer</CcOption>
        <CcOption value={'Marge'}>Marge</CcOption>
        <CcOption value={'Bart'}>Bart</CcOption>
        <CcOption value={'Lisa'}>Lisa</CcOption>
        <CcOption value={'Maggie'}>Maggie</CcOption>
      </CcSelect>
    </div>
  )
}