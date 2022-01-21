import { DebugItemView } from '../item-views/item-views';
import { Story, Meta } from '@storybook/react';
import { ItemDropdown, ItemDropdownProps } from './item-dropdown';

export default {
  component: ItemDropdown,
  title: 'elements/ItemDropdown',
} as Meta;

const Template: Story<ItemDropdownProps> = (args) => <ItemDropdown {...args} />;

export const GreetingItems = Template.bind({});
GreetingItems.args = {
  items: [
    {
      key:"hello"
    },
    {
      key:"goodbye"
    },
    {
      key:"ahoy"
    },
    {
      key:"hej"
    }
  ]
};
