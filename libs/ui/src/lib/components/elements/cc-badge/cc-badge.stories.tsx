
import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from 'react-daisyui';

import { CcBadge, CcBadgeProps } from './cc-badge';

import { CcButton } from '../cc-button/cc-button';

export default {
  component: CcBadge,
  title: 'elements/CcBadge',
} as Meta;

export const Daisy: Story<BadgeProps> = (args) => {
  return <Badge {...args}>Daisy</Badge>
}
Daisy.args = {
}

export const Default: Story<CcBadgeProps> = (args) => {
  return <CcBadge {...args}>Example</CcBadge>
}
Default.args = {
}

export const Colors: Story<CcBadgeProps> = (args) => {
  return (
    <div>
      <div>
        <CcBadge {...args}>neutral</CcBadge>
        <CcBadge {...args} color="primary">
          primary
        </CcBadge>
        <CcBadge {...args} color="secondary">
          secondary
        </CcBadge>
        <CcBadge {...args} color="accent">
          accent
        </CcBadge>
        <CcBadge {...args} color="ghost">
          ghost
        </CcBadge>
      </div>
      <div>
        <CcBadge {...args} color="success">
          success
        </CcBadge>
        <CcBadge {...args} color="info">
          info
        </CcBadge>
        <CcBadge {...args} color="warning">
          warning
        </CcBadge>
        <CcBadge {...args} color="error">
          error
        </CcBadge>
      </div>
    </div>
  )
}
Colors.args = {
  className: 'm-1'
}


export const Outline: Story<CcBadgeProps> = (args) => {
  return (
    <div>
      <CcBadge {...args} variant="outline">
        neutral
      </CcBadge>
      <CcBadge {...args} color="primary" variant="outline">
        primary
      </CcBadge>
      <CcBadge {...args} color="secondary" variant="outline">
        secondary
      </CcBadge>
      <CcBadge {...args} color="accent" variant="outline">
        accent
      </CcBadge>
    </div>
  )
}
Outline.args = {
  className: 'm-1'
}

export const Sizes: Story<CcBadgeProps> = (args) => {
  return (
    <div>
      <CcBadge {...args} size="lg">
        987,654
      </CcBadge>
      <CcBadge {...args} size="md">
        987,654
      </CcBadge>
      <CcBadge {...args} size="sm">
        987,654
      </CcBadge>
      <CcBadge {...args} size="xs">
        987,654
      </CcBadge>
    </div>
  )
}
Sizes.args = {
  className: 'm-1'
}

export const Empty: Story<CcBadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <CcBadge {...args} size="lg" />
      <CcBadge {...args} size="md" />
      <CcBadge {...args} size="sm" />
      <CcBadge {...args} size="xs" />
    </div>
  )
}
Empty.args = {}

export const BadgeInText: Story<CcBadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="text-xl gap-2">
        Heading{' '}
        <CcBadge {...args} size="lg">
          NEW
        </CcBadge>
      </h2>
    </div>
  )
}
BadgeInText.args = {}

export const BadgeInAButton: Story<CcBadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <CcButton className="gap-2">
        Inbox
        <Badge {...args}>+99</Badge>
      </CcButton>
      <CcButton className="gap-2">
        Inbox
        <CcBadge {...args} color="primary">
          +99
        </CcBadge>
      </CcButton>
    </div>
  )
}
BadgeInAButton.args = {}