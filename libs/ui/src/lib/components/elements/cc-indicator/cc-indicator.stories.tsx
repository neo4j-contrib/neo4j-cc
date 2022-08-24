import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Indicator, IndicatorProps, Avatar, Badge } from 'react-daisyui'

import { CcIndicator, CcIndicatorProps } from './cc-indicator'
import { CcAvatar } from '../cc-avatar/cc-avatar'
import { CcBadge } from '../cc-badge/cc-badge'

export default {
  title: 'elements/CcIndicator',
  component: CcIndicator,
  argTypes: {
    innerRef: {
      control: false,
    },
    children: {
      control: false,
    },
    item: {
      control: false,
    },
  },
} as Meta

export const Daisy: Story<IndicatorProps> = (args) => {
  return <Indicator {...args} />
}

Daisy.args = {
  children: (
    <Avatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
  ),
  item: <Badge color="error" />,
}

export const Default: Story<CcIndicatorProps> = (args) => {
  return <CcIndicator {...args} />
}

Default.args = {
  children: (
    <CcAvatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
  ),
  item: <CcBadge color="error" />,
}