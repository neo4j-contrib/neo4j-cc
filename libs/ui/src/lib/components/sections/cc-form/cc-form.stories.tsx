
import { Story, Meta } from '@storybook/react';

import { CcForm } from './cc-form';

import { CcCheckbox, CcCheckboxProps } from '../../elements/cc-checkbox/cc-checkbox'
import { CcInput, CcInputProps } from '../../elements/cc-input/cc-input';
import { CcRadio, CcRadioProps } from '../../elements/cc-radio/cc-radio';

interface CcFormControlProps {
  checkbox?: CcCheckboxProps
  input?: CcInputProps
  radio?: CcRadioProps
}
export default {
  component: CcForm,
  title: 'sections/CcForm',
} as Meta;


const FormTemplate: Story<CcFormControlProps> = (args) => {
  return (
    <CcForm className="shadow bg-base-200 w-64 rounded-lg p-4">
      {
        (args.checkbox !== undefined) ? (
          <CcForm.Label title="Remember me">
            <CcCheckbox {...args.checkbox} />
          </CcForm.Label>
        ) : null
      }
      {
        (args.input !== undefined) ? (
          <CcInput {...args.input} />
        ) : null 

      }
      {
        (args.radio !== undefined) ? (
          <div>
            <CcForm.Label title="Red Pill">
              <CcRadio
                {...args}
                name="radio1"
                className="checked:bg-red-500"
                defaultChecked
              />
            </CcForm.Label>
            <CcForm.Label title="Blue Pill">
            <CcRadio
              {...args}
              name="radio1"
              className="checked:bg-blue-500"
              defaultChecked
            />
          </CcForm.Label>
        </div>
        ) : null
      }
    </CcForm>
  )
}
export const WithCheckbox = FormTemplate.bind({})
WithCheckbox.args = {}

export const WithCheckboxPrimary = FormTemplate.bind({})
WithCheckboxPrimary.args = { checkbox:{ color: 'primary' } }

export const WithCheckboxSecondary = FormTemplate.bind({})
WithCheckboxSecondary.args = { checkbox: { color: 'secondary' }}

export const WithCheckboxAccent = FormTemplate.bind({})
WithCheckboxAccent.args = { checkbox: { color: 'accent' }}

export const WithInput = FormTemplate.bind({})
WithInput.args = { input: {color: 'primary'}}

export const WithRadio = FormTemplate.bind({})
WithRadio.args = { radio: {size: 'md'}}