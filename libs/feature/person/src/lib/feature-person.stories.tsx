import { Story, Meta } from '@storybook/react';
import { FeaturePerson, FeaturePersonProps } from './feature-person';

//  Note: Mock GraphQL data provided in .storybook/preview.js

export default {
  component: FeaturePerson,
  title: 'FeaturePerson',
} as Meta;

const Template: Story<FeaturePersonProps> = (args) => (
  <FeaturePerson {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
