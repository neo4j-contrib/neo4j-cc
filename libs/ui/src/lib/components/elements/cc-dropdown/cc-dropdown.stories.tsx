
import { Story, Meta } from '@storybook/react';

import { Dropdown, DropdownProps } from 'react-daisyui';

export default {
  component: Dropdown,
  title: 'elements/Dropdown',
} as Meta;

const Template: Story<DropdownProps> = (args) => 
  <div className="my-32">
    <Dropdown {...args}>
      <Dropdown.Toggle>Click</Dropdown.Toggle>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>;

export const Default = Template.bind({});
Default.args = {
};

