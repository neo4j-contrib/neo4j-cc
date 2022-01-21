import { Story, Meta } from '@storybook/react';
import {
  AnnounceKitSection,
  AnnounceKitSectionProps,
} from './announce-kit-section';

export default {
  component: AnnounceKitSection,
  title: 'components/AnnounceKitSection',
} as Meta;

const Template: Story<AnnounceKitSectionProps> = (args) => (
  <AnnounceKitSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  productName:"cc"
};
