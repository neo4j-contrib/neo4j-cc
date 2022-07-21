
import { Story, Meta } from '@storybook/react';

import { Kbd, KbdProps } from 'react-daisyui';

import { CcKbd, CcKbdProps } from './cc-kbd';

export default {
  component: CcKbd,
  title: 'elements/CcKbd',
} as Meta;

export const Daisy: Story<KbdProps> = (args) => {
  return <Kbd {...args}>Daisy</Kbd>
}
Daisy.args = {
}

export const Default: Story<CcKbdProps> = (args) => {
  return <CcKbd {...args}>Example</CcKbd>
}
Default.args = {
}

export const InText: Story<CcKbdProps> = (args) => {
  return (
    <div className="font-sans">
      Press <CcKbd {...args}>F</CcKbd> to pay respects.
    </div>
  )
}
InText.args = {
  size: 'sm',
}

export const KeyCombination: Story<CcKbdProps> = (args) => {
  return (
    <>
      <CcKbd {...args}>ctrl</CcKbd>+<CcKbd {...args}>shift</CcKbd>+
      <CcKbd {...args}>del</CcKbd>
    </>
  )
}

export const FunctionKeys: Story<CcKbdProps> = (args) => {
  return (
    <>
      <CcKbd {...args}>⌘</CcKbd>
      <CcKbd {...args}>⌥</CcKbd>
      <CcKbd {...args}>⇧</CcKbd>
      <CcKbd {...args}>⌃</CcKbd>
    </>
  )
}

export const FullKeyboard: Story<CcKbdProps> = (args) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center gap-1 w-full">
        <CcKbd {...args}>q</CcKbd>
        <CcKbd {...args}>w</CcKbd>
        <CcKbd {...args}>e</CcKbd>
        <CcKbd {...args}>r</CcKbd>
        <CcKbd {...args}>t</CcKbd>
        <CcKbd {...args}>y</CcKbd>
        <CcKbd {...args}>u</CcKbd>
        <CcKbd {...args}>i</CcKbd>
        <CcKbd {...args}>o</CcKbd>
        <CcKbd {...args}>p</CcKbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <CcKbd {...args}>a</CcKbd>
        <CcKbd {...args}>s</CcKbd>
        <CcKbd {...args}>d</CcKbd>
        <CcKbd {...args}>f</CcKbd>
        <CcKbd {...args}>g</CcKbd>
        <CcKbd {...args}>h</CcKbd>
        <CcKbd {...args}>j</CcKbd>
        <CcKbd {...args}>k</CcKbd>
        <CcKbd {...args}>l</CcKbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <CcKbd {...args}>z</CcKbd>
        <CcKbd {...args}>x</CcKbd>
        <CcKbd {...args}>c</CcKbd>
        <CcKbd {...args}>v</CcKbd>
        <CcKbd {...args}>b</CcKbd>
        <CcKbd {...args}>n</CcKbd>
        <CcKbd {...args}>m</CcKbd>
        <CcKbd {...args}>/</CcKbd>
      </div>
    </div>
  )
}

export const ArrowKeys: Story<CcKbdProps> = (args) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <CcKbd {...args}>▲</CcKbd>
      </div>
      <div className="flex justify-center gap-12 w-full">
        <CcKbd {...args}>◀︎</CcKbd>
        <CcKbd {...args}>▶︎</CcKbd>
      </div>
      <div className="flex justify-center w-full">
        <CcKbd {...args}>▼</CcKbd>
      </div>
    </>
  )
}