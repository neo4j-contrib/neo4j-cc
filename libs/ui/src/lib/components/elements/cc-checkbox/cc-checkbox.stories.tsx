
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from 'react-daisyui'

import { CcCheckbox, CcCheckboxProps } from './cc-checkbox'

export default {
  component: CcCheckbox,
  title: 'elements/CcCheckbox',
} as Meta;

export const Daisy: Story<CheckboxProps> = (args) => {
  return (
    <Checkbox {...args}/>
  )
}

const Template: Story<CcCheckboxProps> = (args) => {
  return (
    <CcCheckbox {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
}

export const Sizes: Story<CheckboxProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Checkbox {...args} checked size="xs" />
      <Checkbox {...args} checked size="sm" />
      <Checkbox {...args} checked size="md" />
      <Checkbox {...args} checked size="lg" />
    </div>
  )
}
Sizes.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const DisabledChecked = Template.bind({})
DisabledChecked.args = { checked: true, disabled: true }