import { Story, Meta } from '@storybook/react';
import { NinjaTable, NinjaTableProps } from './ninja-table';

import sampleApiResponse from '../resources/ninja-table.json'

export default {
  component: NinjaTable,
  title: 'components/NinjaTable',
} as Meta;

const Template: Story<NinjaTableProps> = (args) => <NinjaTable {...args} />;

/** No ninjas? Show as loading state. */
export const Empty = Template.bind({});
Empty.args = {
  ninjas: []
}

export const Sampled = Template.bind({});
Sampled.args = {
  ninjas: sampleApiResponse.discourse
}
