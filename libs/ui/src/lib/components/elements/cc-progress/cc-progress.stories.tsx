
import { Story, Meta } from '@storybook/react';

import { Progress, ProgressProps } from 'react-daisyui';

import { CcProgress, CcProgressProps } from './cc-progress';

export default {
  component: CcProgress,
  title: 'elements/CcProgress',
} as Meta;

export const Daisy: Story<ProgressProps> = (args) => (
  <div className="flex flex-col gap-y-2">
    <Progress {...args} className="w-56" value={0} />
    <Progress {...args} className="w-56" value={10} />
    <Progress {...args} className="w-56" value={40} />
    <Progress {...args} className="w-56" value={70} />
    <Progress {...args} className="w-56" value={100} />
  </div>
)
Daisy.args = {
  max: 100,
}


const Template: Story<CcProgressProps> = (args) => (
  <div className="flex flex-col gap-y-2">
    <CcProgress {...args} className="w-56" value={0} />
    <CcProgress {...args} className="w-56" value={10} />
    <CcProgress {...args} className="w-56" value={40} />
    <CcProgress {...args} className="w-56" value={70} />
    <CcProgress {...args} className="w-56" value={100} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  max: 100,
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
  max: 100,
  color: 'primary',
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
  max: 100,
  color: 'secondary',
}

export const AccentColor = Template.bind({})
AccentColor.args = {
  max: 100,
  color: 'accent',
}

export const SuccessColor = Template.bind({})
SuccessColor.args = {
  max: 100,
  color: 'success',
}

export const InfoColor = Template.bind({})
InfoColor.args = {
  max: 100,
  color: 'info',
}

export const WarningColor = Template.bind({})
WarningColor.args = {
  max: 100,
  color: 'warning',
}

export const ErrorColor = Template.bind({})
ErrorColor.args = {
  max: 100,
  color: 'error',
}

export const Indeterminate: Story<ProgressProps> = (args) => {
  return <Progress {...args} className="w-56" />
}
Indeterminate.args = {}