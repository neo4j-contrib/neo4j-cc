import { Story, Meta } from '@storybook/react';
import { CommunityNavigation, CommunityNavigationProps } from './community-navigation';

export default {
  component: CommunityNavigation,
  title: 'CommunityNavigation',
} as Meta;

const Template: Story<CommunityNavigationProps> = (args) => <CommunityNavigation {...args} />;

export const WithoutAuthenticatedUser = Template.bind({});
WithoutAuthenticatedUser.args = {
  userIsAuthenticated: false
};

export const WithAuthenticatedUser = Template.bind({});
WithAuthenticatedUser.args = {
  userIsAuthenticated: true
};