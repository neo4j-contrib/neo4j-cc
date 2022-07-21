
import { Story, Meta } from '@storybook/react';

import { RadialProgress, RadialProgressProps } from 'react-daisyui';

import { CcRadialProgress, CcRadialProgressProps } from './cc-radial-progress';

export default {
  component: CcRadialProgress,
  title: 'elements/CcRadialProgress',
} as Meta;

export const Daisy: Story<RadialProgressProps> = (args) => (
  <RadialProgress {...args}>{args.value}%</RadialProgress>
)
Daisy.args = {
  value: 75,
}


const Template: Story<CcRadialProgressProps> = (args) => (
  <CcRadialProgress {...args}>{args.value}%</CcRadialProgress>
)

export const Default = Template.bind({})
Default.args = {
  value: 75,
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  value: 75,
  color: 'primary',
}

export const BackgroundColor = Template.bind({})
BackgroundColor.args = {
  value: 75,
  className: 'bg-primary text-primary-content border-4 border-primary',
}

export const CustomSizeAndThickness: Story<RadialProgressProps> = (args) => {
  return (
    <div className="flex items-center gap-4">
      <CcRadialProgress value={60} size="12rem" thickness="2px">
        60%
      </CcRadialProgress>
      <CcRadialProgress value={80} size="12rem" thickness="40px">
        80%
      </CcRadialProgress>
    </div>
  )
}
CustomSizeAndThickness.args = {}