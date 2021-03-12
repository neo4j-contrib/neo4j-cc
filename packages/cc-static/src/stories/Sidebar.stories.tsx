import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sidebar, SidebarProps } from 'components/Sidebar';

export default {
  title: 'CC/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <div className="h-screen absolute top-0 left-0"><Sidebar {...args} /></div>;

export const NormalSidebar = Template.bind({});
NormalSidebar.args = {
};

