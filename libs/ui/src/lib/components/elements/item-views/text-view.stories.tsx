
import { Story, Meta } from '@storybook/react';
import { ItemTextView, ItemViewsProps } from './item-views';

export default {
  component: ItemTextView,
  title: 'elements/item views/ItemTextView',
} as Meta;

const Template: Story<ItemViewsProps> = (args:ItemViewsProps) => <ItemTextView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  item:"some text"
};
