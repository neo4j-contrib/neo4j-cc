
import { Story, Meta } from '@storybook/react';

import { Range, RangeProps } from 'react-daisyui'

import { CcRange, CcRangeProps } from './cc-range'

export default {
  component: CcRange,
  title: 'elements/CcRange',
} as Meta;

export const Daisy: Story<RangeProps> = (args) => {
  return (
    <Range {...args} />
  )
}

const Template: Story<CcRangeProps> = (args) => {
  return (
    <CcRange {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const WithSteps = Template.bind({})
WithSteps.args = { step: 25 }

export const PrimaryColor = Template.bind({})
PrimaryColor.args = { color: 'primary' }

export const SecondaryColor = Template.bind({})
SecondaryColor.args = { color: 'secondary' }

export const AccentColor = Template.bind({})
AccentColor.args = { color: 'accent' }

export const Sizes: Story<CcRangeProps> = (args) => {
  return (
    <div className="flex flex-col gap-2">
      <CcRange {...args} defaultValue="40" size="xs" />
      <CcRange {...args} defaultValue="50" size="sm" />
      <CcRange {...args} defaultValue="60" size="md" />
      <CcRange {...args} defaultValue="70" size="lg" />
    </div>
  )
  }