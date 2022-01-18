import { Story, Meta } from '@storybook/react';
import {
  PopularBlogSection,
  PopularBlogSectionProps,
} from './popular-blog-section';

import {data} from '../../../../data/twin4j.json';

export default {
  component: PopularBlogSection,
  title: 'PopularBlogSection',
} as Meta;

const Template: Story<PopularBlogSectionProps> = (args) => (
  <PopularBlogSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  blogs: data.topCommunityBlogsAndContent
};
