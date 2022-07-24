
import { Story, Meta } from '@storybook/react';

import { CcFillPattern, CcFillPatternProps, patternNames } from './cc-fill-pattern';

export default {
  component: CcFillPattern,
  title: 'elements/CcFillPattern',
  argTypes: {
    pattern: {
      options: patternNames,
      control: { type: 'select' },
    },
  },

} as Meta;


const Template: Story<CcFillPatternProps> = (args) => 
  <CcFillPattern {...args}  className="w-64 h-64"/>

export const PickOne = Template.bind({})
PickOne.args = {
  pattern: 'hexagons'
}

