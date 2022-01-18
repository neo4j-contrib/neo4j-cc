import { Story, Meta } from '@storybook/react';
import { PopularProjects, PopularProjectsProps } from './popular-projects';

import {data} from '../../../../data/twin4j.json';

export default {
  component: PopularProjects,
  title: 'PopularProjects',
} as Meta;

const Template: Story<PopularProjectsProps> = (args) => (
  <PopularProjects {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  projects: data.topCommunityOpenSourceProjects
};
