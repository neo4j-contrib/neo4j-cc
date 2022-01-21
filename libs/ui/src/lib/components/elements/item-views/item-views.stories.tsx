import { Story, Meta } from '@storybook/react';
import { DebugItemView, ItemViewsProps } from './item-views';

export default {
  component: DebugItemView,
  title: 'DebugItemView',
} as Meta;

const Template: Story<ItemViewsProps> = (args) => <DebugItemView {...args} />;

export const Primary = Template.bind({});
Primary.args = {item:"hello"};
