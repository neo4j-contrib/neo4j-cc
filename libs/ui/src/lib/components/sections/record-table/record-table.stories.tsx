import { Story, Meta } from '@storybook/react';
import { RecordTable, RecordTableProps } from './record-table';

export default {
  component: RecordTable,
  title: 'RecordTable',
} as Meta;

const Template: Story<RecordTableProps> = (args) => <RecordTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
