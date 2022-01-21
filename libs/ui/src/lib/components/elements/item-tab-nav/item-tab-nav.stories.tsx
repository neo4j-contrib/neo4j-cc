import { Story, Meta } from '@storybook/react';
import { ItemTabNav, ItemTabNavProps } from './item-tab-nav';

export default {
  component: ItemTabNav,
  title: 'elements/ItemTabNav',
} as Meta;

const Template: Story<ItemTabNavProps> = (args) => <ItemTabNav {...args} />;

export const JustTabs = Template.bind({});
JustTabs.args = {
  items: [
    {
      key:"this"
    },
    {
      key:"that"
    },
    {
      key:"another"
    }
  ]
};


export const TabsWithChild = Template.bind({});
TabsWithChild.args = {
  items: [
    {
      key:"this"
    },
    {
      key:"that"
    },
    {
      key:"another"
    }
  ],
  children: <p className="bg-yellow-200">Child</p>
};