import { Story, Meta } from '@storybook/react';
import {
  FeatureNinjaLeaderboard,
  FeatureNinjaLeaderboardProps,
} from './feature-ninja-leaderboard';

export default {
  component: FeatureNinjaLeaderboard,
  title: 'FeatureNinjaLeaderboard',
} as Meta;

const Template: Story<FeatureNinjaLeaderboardProps> = (args) => (
  <FeatureNinjaLeaderboard {...args} />
);

export const LoadingNinjas = Template.bind({});
LoadingNinjas.args = {};
