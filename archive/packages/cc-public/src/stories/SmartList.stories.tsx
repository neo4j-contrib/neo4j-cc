import React from 'react';
import { range } from 'fp-ts/Array';

import {CellProps} from 'react-table';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SmartList, SmartListProps } from '../components/SmartList';

import {TextPlaceholder} from './TextPlaceholder';
import { SmartListItem } from 'components/SmartListItem';
import { fakePerson } from './FakeRecord.factory';
import { fake } from 'faker';

export const ItemPlaceholder:React.FC<CellProps<any>> = ({value}) => <TextPlaceholder text={value}/>

export default {
  title: 'CC/SmartList',
  component: SmartList,
} as Meta;

const Template: Story<SmartListProps> = (args) => <SmartList renderItem={SmartListItem} {...args} />;

export const EmptyStream = Template.bind({});
EmptyStream.args = {
  items: []
};

export const SingleTextItem = Template.bind({});
SingleTextItem.args = {
  items: [{name:"Hello"}]
};
SingleTextItem.argTypes = {
  renderItem: { table: { disable: true } },
};

export const SinglePerson = Template.bind({});
SinglePerson.args = {
  items: [fakePerson()]
};
SingleTextItem.argTypes = {
  renderItem: { table: { disable: true } },
};

export const TwoPeople = Template.bind({});
TwoPeople.args = {
  items: range(1,2).map(fakePerson)
};


export const ThreePeople = Template.bind({});
ThreePeople.args = {
  items: range(1,3).map(fakePerson)
};


export const HundredPeople = Template.bind({});
HundredPeople.args = {
  items: range(1,100).map(fakePerson)
};

