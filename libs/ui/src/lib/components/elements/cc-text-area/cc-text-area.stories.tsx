import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Textarea, TextareaProps } from 'react-daisyui'

import { CcTextArea, CcTextAreaProps } from './cc-text-area'

export default {
  title: 'elements/CcTextArea',
  component: CcTextArea,
} as Meta

export const Daisy: Story<TextareaProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Textarea {...args} />
    </div>
  )
}

export const Default: Story<CcTextAreaProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <CcTextArea {...args} />
    </div>
  )
}
