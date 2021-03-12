import React, { FC, Fragment } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SmartListItem, SmartTileProps } from 'components/SmartListItem';
import { fakePerson } from './FakeRecord.factory';

export default {
  title: 'CC/SmartListItem',
  component: SmartListItem,
  argTypes: { onSelect: { 
    action: 'selected',
    diable: true
  } },
} as Meta;

const DisplayColumn: FC = ({ children }) => (
  <div className="flex flex-col gap-4">
    {children}
  </div>
)


const Template: Story<SmartTileProps> = (args) => <SmartListItem {...args} />;

export const Titled = Template.bind({});
Titled.args = {
  value: {title:'Titled SmartListItem'},
};

export const Described = Template.bind({});
Described.args = {
  value: {title:'Titled SmartListItem', description:'This is a smart list item for list-like display of'},
};

export const PersonProfile = Template.bind({});
PersonProfile.args = {
  value: fakePerson(),
};

