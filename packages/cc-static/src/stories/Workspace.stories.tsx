import React from 'react';
import { range } from 'fp-ts/Array'

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Workspace, WorkspaceProps } from '../components/Workspace';

import {HundredPeople} from './SmartList.stories';
import {TextPlaceholder} from './TextPlaceholder';
import { SmartListProps } from '../components/SmartList';

export default {
  title: 'CC/Workspace',
  component: Workspace,
} as Meta;

const Template: Story<WorkspaceProps> = (args) => <Workspace {...args} />;

export const EmptyWorkspace = Template.bind({});
EmptyWorkspace.args = {
};

export const SingleTextChild = Template.bind({});
SingleTextChild.args = {
  children: <TextPlaceholder text="single"/>
};

export const TwoTextChildren = Template.bind({});
TwoTextChildren.args = {
  children: range(1,2).map( i => (<TextPlaceholder text={i}/>))
};

export const WithSmartList = Template.bind({});
WithSmartList.args = {
  children: <HundredPeople {...HundredPeople.args as SmartListProps} />
};

// export const WithTwoStreams = Template.bind({});
// WithTwoStreams.args = {
//   children: range(1,2).map( i => (<HundredTextChildren {...HundredTextChildren.args} />))
// };

// export const WithThreeStreams = Template.bind({});
// WithThreeStreams.args = {
//   children: range(1,3).map( i => (<HundredTextChildren {...HundredTextChildren.args} />))
// };

// export const WithFourStreams = Template.bind({});
// WithFourStreams.args = {
//   children: range(1,4).map( i => (<HundredTextChildren {...HundredTextChildren.args} />))
// };