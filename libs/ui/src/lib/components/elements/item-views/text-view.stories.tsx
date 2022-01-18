import { ItemViewsProps } from '@neo4j-cc/ui';
import { Story, Meta } from '@storybook/react';
import { ItemTextView } from './item-views';

export default {
  component: ItemTextView,
  title: 'elements/item views/ItemTextView',
} as Meta;

const Template: Story<ItemViewsProps> = (args:ItemViewsProps) => <ItemTextView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value:"some text"
};
