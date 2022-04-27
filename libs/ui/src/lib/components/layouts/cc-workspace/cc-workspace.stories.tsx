import { Story, Meta } from '@storybook/react';
import { CcWorkspace, CcWorkspaceProps } from './cc-workspace';

export default {
  component: CcWorkspace,
  title: 'layouts/CcWorkspace',
} as Meta;

const Template: Story<CcWorkspaceProps> = (args) => (
  <CcWorkspace {...args} />
);

export const Empty = Template.bind({});
Empty.args = {

};

export const PlainText = Template.bind({});
PlainText.args = {
  children: "Plain text as a string."
};
