import { Story, Meta } from '@storybook/react';
import {
  FeatureReleaseNotes,
  FeatureReleaseNotesProps,
} from './feature-release-notes';

export default {
  component: FeatureReleaseNotes,
  title: 'FeatureReleaseNotes',
} as Meta;

const Template: Story<FeatureReleaseNotesProps> = (args) => (
  <FeatureReleaseNotes {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  productName:"cc"
};
