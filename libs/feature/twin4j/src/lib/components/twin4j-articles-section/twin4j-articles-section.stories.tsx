import { Story, Meta } from '@storybook/react';
import { Twin4jArticles, Twin4jArticlesProps } from './twin4j-articles-section';

export default {
  component: Twin4jArticles,
  title: 'Twin4jArticles',
} as Meta;

const Template: Story<Twin4jArticlesProps> = (args) => <Twin4jArticles {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
