import { Story, Meta } from '@storybook/react';
import { CommunityAvatar, CommunityAvatarProps, CommunityUser } from './community-avatar';

const user:CommunityUser = {
  "name": "bratanic.tomaz",
  "screenName": "Bratanic Tomaz",
  "avatar": "https://community.neo4j.com/user_avatar/community.neo4j.com/bratanic.tomaz/50/7595_2.png"
}

export default {
  component: CommunityAvatar,
  title: 'CommunityAvatar',
} as Meta;

const Template: Story<CommunityAvatarProps> = (args) => (
  <CommunityAvatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  user
};


export const Named = Template.bind({});
Named.args = {
  user,
  named: true
};