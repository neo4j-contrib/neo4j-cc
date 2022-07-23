
import { Story, Meta } from '@storybook/react';

import { CcButton, CcButtonProps } from './cc-button';

export default {
  component: CcButton,
  title: 'elements/CcButton',
} as Meta;

const Template: Story<CcButtonProps> = (args) => <CcButton {...args} />;

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const Primary = Template.bind({});
Primary.args = {
  children: 'Press Me',
  color: 'primary'
};

export const Colors: Story<CcButtonProps> = (args) => {
  return (
    <div>
      <div>
        <CcButton {...args}>Default</CcButton>
        <CcButton {...args} color="primary">
          Primary
        </CcButton>
        <CcButton {...args} color="secondary">
          Secondary
        </CcButton>
        <CcButton {...args} color="accent">
          Accent
        </CcButton>
        <CcButton {...args} color="ghost">
          Ghost
        </CcButton>
      </div>
      <div>
        <CcButton {...args} color="success">
          Success
        </CcButton>
        <CcButton {...args} color="info">
          Info
        </CcButton>
        <CcButton {...args} color="warning">
          Warning
        </CcButton>
        <CcButton {...args} color="error">
          Error
        </CcButton>
      </div>
    </div>
  )
}
Colors.args = {
  className: "m-1"
}

export const Variants: Story<CcButtonProps> = (args) => {
  return (
    <div className="flex gap-x-2">
      <CcButton {...args}>Default</CcButton>
      <CcButton {...args} variant="outline">
        Outline
      </CcButton>
      <CcButton {...args} variant="link">
        Link
      </CcButton>
    </div>
  )
}

export const Icons: Story<CcButtonProps> = (args) => {
  const favoriteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  )

  return (
    <div className="flex gap-x-2">
      <CcButton {...args} startIcon={favoriteIcon}>
        Icon at Start
      </CcButton>
      <CcButton {...args} endIcon={favoriteIcon}>
        Icon at End
      </CcButton>
    </div>
  )
}

export const AsHref: Story<CcButtonProps> = (args) => {
  return (
    <div className="flex gap-x-2">
      <CcButton
        {...args}
        onClick={() => alert('See, I have an onClick event and no href.')}
      >
        I'm a {`<button>`}
      </CcButton>
      <CcButton href="https://google.com">I'm an {`<a>`}</CcButton>
    </div>
  )
}