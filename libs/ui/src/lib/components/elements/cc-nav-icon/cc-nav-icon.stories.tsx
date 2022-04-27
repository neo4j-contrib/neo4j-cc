
import { Story, Meta } from '@storybook/react';

import { CcNavIcon, CcNavIconProps } from './cc-nav-icon';

export default {
  component: CcNavIcon,
  title: 'elements/navigation/CcNavIcon',
} as Meta;

const Template: Story<CcNavIconProps> = (args) => <CcNavIcon {...args} />;

export const TextIcon = Template.bind({});
TextIcon.args = {
  children: "A"
};
