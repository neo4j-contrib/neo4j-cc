
import { Story, Meta } from '@storybook/react';

import { CcButton, CcButtonProps } from './cc-button';

export default {
  component: CcButton,
  title: 'elements/CcButton',
} as Meta;

const Template: Story<CcButtonProps> = (args) => <CcButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Press Me',
  color: 'primary'
};

