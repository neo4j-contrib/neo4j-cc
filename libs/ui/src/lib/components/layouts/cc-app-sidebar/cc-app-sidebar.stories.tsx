import { Story, Meta } from '@storybook/react';
import { CcAppSidebar, CcAppSidebarProps } from './cc-app-sidebar';

export default {
  component: CcAppSidebar,
  title: 'layouts/CcAppSidebar',
} as Meta;

const Template: Story<CcAppSidebarProps> = (args) => (
  <CcAppSidebar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
