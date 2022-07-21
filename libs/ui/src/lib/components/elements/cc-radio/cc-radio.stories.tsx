
import { Story, Meta } from '@storybook/react';

import { Radio, RadioProps } from 'react-daisyui'

import { CcRadio, CcRadioProps } from './cc-radio'

export default {
  component: CcRadio,
  title: 'elements/CcRadio',
} as Meta;

export const Daisy: Story<RadioProps> = (args) => {
  return (
    <form>
      <Radio {...args} name="radio1" />
      <Radio {...args} name="radio1" defaultChecked />
    </form>
  )
}

const Template: Story<CcRadioProps> = (args) => {
  return (
    <form>
      <CcRadio {...args} name="radio1" />
      <CcRadio {...args} name="radio1" defaultChecked />
    </form>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = { color: 'primary' }

export const SecondaryColor = Template.bind({})
SecondaryColor.args = { color: 'secondary' }

export const AccentColor = Template.bind({})
AccentColor.args = { color: 'accent' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
