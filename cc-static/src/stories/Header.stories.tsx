import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SiteHeader, SiteHeaderProps } from 'components/SiteHeader';

export default {
  title: 'CC/Header',
  component: SiteHeader,
} as Meta;

const Template: Story<SiteHeaderProps> = (args) => <SiteHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  onLogout: () => { alert('Signed Out') },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  onCreateAccount: () => { alert('Signed Up') },
  onLogin: () => { alert('Signed In') },
};
