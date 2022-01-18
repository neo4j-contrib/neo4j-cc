import { DebugItemView } from '../item-views/item-views';
import { Story, Meta } from '@storybook/react';
import { ItemList, ItemListProps } from './item-list';

export default {
  component: ItemList,
  title: 'elements/ItemList',
} as Meta;

const Template: Story<ItemListProps<{msg:string}>> = (args) => <ItemList {...args} />;

export const WithDebugItems = Template.bind({});
WithDebugItems.args = {
  renderItem: DebugItemView,
  items: [
    {msg:"hello"}
  ]
};
