import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Toggle, ToggleProps } from 'react-daisyui'

import { CcToggle, CcToggleProps } from './cc-toggle'

export default {
  title: 'elements/CcToggle',
  component: CcToggle,
} as Meta

const Template: Story<CcToggleProps> = (args) => {
  return <Toggle {...args} />
}

export const Daisy: Story<ToggleProps> = (args) => (
  <Toggle {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const DisabledAndChecked = Template.bind({})
DisabledAndChecked.args = { disabled: true, checked: true }

export const Sizes: Story<ToggleProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>
  )
}