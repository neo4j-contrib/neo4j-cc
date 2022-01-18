import { Story, Meta } from '@storybook/react';
import { CcAppLayout, /*CcAppLayoutProps*/ } from './cc-app-layout';

export default {
  component: CcAppLayout,
  title: 'layouts/CcAppLayout',
} as Meta;

const Template: Story<never> = (args) => <CcAppLayout {...args} />;

export const Primary = Template.bind({});
// Primary.args = {};
