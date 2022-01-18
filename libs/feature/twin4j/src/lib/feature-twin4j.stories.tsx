import { Story, Meta } from '@storybook/react';
import { FeatureTwin4j, FeatureTwin4jProps } from './feature-twin4j';

import {data as communityGraph} from '../../data/twin4j.json';
import { CommunityUser } from './elements/community-avatar/community-avatar';

const twin4j = communityGraph.thisWeekInNeo4j;
const topItems = twin4j.topItems;
const developers:CommunityUser[] = communityGraph.topNewCertifiedDevelopers.map((d:{developer:CommunityUser}) => d.developer);
const blogs = communityGraph.topCommunityBlogsAndContent;
const projects = communityGraph.topCommunityOpenSourceProjects;

export default {
  component: FeatureTwin4j,
  title: 'FeatureTwin4j',
} as Meta;

const Template: Story<FeatureTwin4jProps> = (args) => (
  <FeatureTwin4j {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  communityGraph
};
