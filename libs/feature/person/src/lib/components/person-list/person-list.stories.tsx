import { Story, Meta } from '@storybook/react';
import { PersonList, PersonListProps } from './person-list';

export default {
  component: PersonList,
  title: 'PersonList',
} as Meta;

const Template: Story<PersonListProps> = (args) => <PersonList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
