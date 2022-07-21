
import { Story, Meta } from '@storybook/react';

import { Tooltip, TooltipProps, Button } from 'react-daisyui'

import { CcButton } from '../cc-button/cc-button'

import { CcTooltip, CcTooltipProps } from './cc-tooltip'

export default {
  component: CcTooltip,
  title: 'elements/CcTooltip',
} as Meta;

export const Daisy: Story<TooltipProps> = (args) => {
  return (
    <div className="my-6">
      <Tooltip {...args} message='hello' >
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  )
}

const Template: Story<CcTooltipProps> = (args) => {
  return (
    <div className="my-6">
      <CcTooltip {...args}>
        <CcButton>Hover me</CcButton>
      </CcTooltip>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  message: 'hello',
}

export const ForceOpen = Template.bind({})
ForceOpen.args = {
  message: 'hello',
  open: true,
}

export const Bottom = Template.bind({})
Bottom.args = {
  message: 'hello',
  open: true,
  position: 'bottom',
}

export const Left = Template.bind({})
Left.args = {
  message: 'hello',
  open: true,
  position: 'left',
}

export const Right = Template.bind({})
Right.args = {
  message: 'hello',
  open: true,
  position: 'right',
}

export const Colors: Story<TooltipProps> = (args) => {
  return (
    <div className="flex gap-2 mt-6">
      <CcTooltip {...args} color="primary" message="primary">
        <CcButton color="primary">Primary</CcButton>
      </CcTooltip>

      <CcTooltip {...args} color="secondary" message="secondary">
        <CcButton color="secondary">Secondary</CcButton>
      </CcTooltip>

      <CcTooltip {...args} color="accent" message="accent">
        <CcButton color="accent">Accent</CcButton>
      </CcTooltip>
    </div>
  )
}
Colors.args = {
  open: true,
}

export const Statuses: Story<TooltipProps> = (args) => {
  return (
    <div className="flex gap-2 mt-6">
      <CcTooltip {...args} color="info" message="info">
        <CcButton color="info">Info</CcButton>
      </CcTooltip>

      <CcTooltip {...args} color="success" message="success">
        <CcButton color="success">Success</CcButton>
      </CcTooltip>

      <CcTooltip {...args} color="warning" message="warning">
        <CcButton color="warning">Warning</CcButton>
      </CcTooltip>

      <CcTooltip {...args} color="error" message="error">
        <CcButton color="error">Error</CcButton>
      </CcTooltip>
    </div>
  )
}
Statuses.args = {
  open: true,
}