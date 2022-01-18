import { Story, Meta } from '@storybook/react';
import { PersonForm, PersonFormProps } from './person-form';

export default {
  component: PersonForm,
  title: 'PersonForm',
} as Meta;

const Template: Story<PersonFormProps> = (args) => <PersonForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
