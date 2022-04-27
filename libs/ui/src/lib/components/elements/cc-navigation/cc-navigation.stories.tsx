
import { Story, Meta } from '@storybook/react';

import { NavLinkProps, BrowserRouter } from 'react-router-dom';

import { CcNavLink } from './cc-navigation';

export default {
  component: CcNavLink,
  title: 'elements/navigation/CcNavLink',
} as Meta;

const Template: Story<NavLinkProps> = (args) => <BrowserRouter><CcNavLink {...args} /></BrowserRouter>;

export const PlainLink = Template.bind({});
PlainLink.args = {
  to:"/link",
  children:"/link"
};
