
import { Story, Meta } from '@storybook/react';

import { Dropdown, DropdownProps } from 'react-daisyui';

import { CcDropdown, CcDropdownProps } from './cc-dropdown'

export default {
  component: Dropdown,
  title: 'elements/Dropdown',
} as Meta;

export const DaisyDropdown: Story<DropdownProps> = (args) => 
  <div className="my-32">
    <Dropdown {...args}>
      <Dropdown.Toggle>Reveal Dropdown</Dropdown.Toggle>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>;

export const Default: Story<CcDropdownProps> = (args) => 
  <div className="my-32">
    <CcDropdown {...args}>
      <CcDropdown.Toggle>Reveal Dropdown</CcDropdown.Toggle>
      <CcDropdown.Menu className="w-52">
        <CcDropdown.Item>Item 1</CcDropdown.Item>
        <CcDropdown.Item>Item 2</CcDropdown.Item>
      </CcDropdown.Menu>
    </CcDropdown>
  </div>


// export const AsCard: Story<DropdownProps> = (args) => 
//   <div className="my-32">
//     <Dropdown {...args}>
//       <Dropdown.Toggle>Click</Dropdown.Toggle>
//       <Dropdown.Menu className="card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1">
//         <Card.Body>
//           <Card.Title tag={'h3'}>Card title!</Card.Title>
//           <p>you can use any element as a dropdown.</p>
//         </Card.Body>
//       </Dropdown.Menu>
//     </Dropdown>
//   </div>
