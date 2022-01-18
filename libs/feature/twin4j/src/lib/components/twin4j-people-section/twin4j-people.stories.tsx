
import { Story, Meta } from '@storybook/react';
import { Twin4jPeople, Twin4jPeopleProps } from './twin4j-people';

import {data} from '../../../../data/twin4j.json';
import { CommunityUser } from '../../elements/community-avatar/community-avatar';

const developers:CommunityUser[] = data.topNewCertifiedDevelopers.map((d:{developer:CommunityUser}) => d.developer);

export default {
  component: Twin4jPeople,
  title: 'Twin4jPeople',
} as Meta;

const Template: Story<Twin4jPeopleProps> = (args) => <Twin4jPeople {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  twin4j: data.thisWeekInNeo4j,
  developers
};
