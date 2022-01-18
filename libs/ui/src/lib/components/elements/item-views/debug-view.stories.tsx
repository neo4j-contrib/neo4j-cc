import { ItemViewsProps } from '@neo4j-cc/ui';
import { Story, Meta } from '@storybook/react';
import { DebugItemView } from './item-views';

export default {
  component: DebugItemView,
  title: 'elements/item views/DebugItem',
} as Meta;

const Template: Story<ItemViewsProps> = (args:ItemViewsProps) => <DebugItemView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value:"debug"
};
