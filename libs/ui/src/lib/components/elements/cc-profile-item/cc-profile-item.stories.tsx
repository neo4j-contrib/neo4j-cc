
import { Story, Meta } from '@storybook/react';

import { CcProfileItem, CcProfileItemProps } from './cc-profile-item';

export default {
  component: CcProfileItem,
  title: 'elements/CcProfileItem',
} as Meta;

const Template: Story<CcProfileItemProps> = (args) => <CcProfileItem {...args} />;

export const NoUser = Template.bind({});
NoUser.args = {};

export const SomeUser = Template.bind({});
SomeUser.args = {
  user: {
    name: "Andreas Kollegger",
    picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    nickname: "abk"
  }
};
