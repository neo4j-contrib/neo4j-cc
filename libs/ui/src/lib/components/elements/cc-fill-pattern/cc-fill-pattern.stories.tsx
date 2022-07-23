
import { Story, Meta } from '@storybook/react';

import { CcFillPattern, CcFillPatternProps } from './cc-fill-pattern';

export default {
  component: CcFillPattern,
  title: 'elements/CcFillPattern',
} as Meta;


const Template: Story<CcFillPatternProps> = (args) => 
  <CcFillPattern {...args}  className="w-64 h-64"/>

export const Checkerboard = Template.bind({})
Checkerboard.args = {
  pattern: 'checkerboard'
}

export const DiagonalCheckerboard = Template.bind({})
DiagonalCheckerboard.args = {
  pattern: 'diagonal-checkerboard'
}

export const Anchors = Template.bind({})
Anchors.args = {
  pattern: 'anchors'
}

export const DiagonalStripes = Template.bind({})
DiagonalStripes.args = {
  pattern: 'diagonal-stripes'
}

export const Honeycomb = Template.bind({})
Honeycomb.args = {
  pattern: 'honeycomb'
}

export const Stripes = Template.bind({})
Stripes.args = {
  pattern: 'stripes'
}

export const VerticalStripes = Template.bind({})
VerticalStripes.args = {
  pattern: 'vertical-stripes'
}

export const ZigZag = Template.bind({})
ZigZag.args = {
  pattern: 'zigzag'
}

export const Fishes = Template.bind({})
Fishes.args = {
  pattern: 'fishes'
}

export const Triangles = Template.bind({})
Triangles.args = {
  pattern: 'triangles'
}

export const Arrows = Template.bind({})
Arrows.args = {
  pattern: 'arrows'
}

export const Weave = Template.bind({})
Weave.args = {
  pattern: 'weave'
}

export const Marrakesh = Template.bind({})
Marrakesh.args = {
  pattern: 'marrakesh'
}

export const Carbon = Template.bind({})
Carbon.args = {
  pattern: 'carbon'
}

export const Carbonfiber = Template.bind({})
Carbonfiber.args = {
  pattern: 'carbonfiber'
}

export const Hearts = Template.bind({})
Hearts.args = {
  pattern: 'hearts'
}

export const Argyle = Template.bind({})
Argyle.args = {
  pattern: 'argyle'
}

export const Steps = Template.bind({})
Steps.args = {
  pattern: 'steps',
  color: 'primary'
}

export const Waves = Template.bind({})
Waves.args = {
  pattern: 'waves',
  color: 'primary'
}

