
import { Story, Meta } from '@storybook/react';

import { CcForm } from './cc-form';

import { CcCheckbox, CcCheckboxProps } from '../../elements/cc-checkbox/cc-checkbox'
import { CcInput, CcInputProps } from '../../elements/cc-input/cc-input';
import { CcRadio, CcRadioProps } from '../../elements/cc-radio/cc-radio';
import { CcSelect, CcSelectProps } from '../../elements/cc-select/cc-select';
import { CcToggle, CcToggleProps } from '../../elements/cc-toggle/cc-toggle';

import { Fragment } from 'react';
import { CcTextArea, CcTextAreaProps } from '../../elements/cc-text-area/cc-text-area';

interface CcFormControlProps {
  checkbox?: CcCheckboxProps
  input?: CcInputProps
  radio?: CcRadioProps
  select?: Omit<CcSelectProps<string>, 'children'>
  toggle?: CcToggleProps
  textarea?: CcTextAreaProps
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
      {
        (args.select !== undefined) ? (
          <Fragment>
            <CcForm.Label >
              <span className="label-text">Best fantasy franchise</span>
              <span className="label-text-alt">Alt label</span>
            </CcForm.Label>
            <CcSelect {...args.select}>
              <CcSelect.Option value={undefined} disabled selected>
                Pick one
              </CcSelect.Option>
              <CcSelect.Option value="Start Wars">Star Wars</CcSelect.Option>
              <CcSelect.Option value="Harry Potter">Harry Potter</CcSelect.Option>
              <CcSelect.Option value="Lord of the Rings">Lord of the Rings</CcSelect.Option>
              <CcSelect.Option value="Planet of the Apes">Planet of the Apes</CcSelect.Option>
              <CcSelect.Option value="Star Trek">Star Trek</CcSelect.Option>
            </CcSelect>
            <CcForm.Label>
              <span className="label-text-alt">Alt label</span>
              <span className="label-text-alt">Alt label</span>
            </CcForm.Label>
          </Fragment>  
        ) : null
      }
      {
        (args.toggle !== undefined) ? (
        <CcForm.Label title="Remember me">
            <CcToggle {...args.toggle} className="m-2" />
        </CcForm.Label>
        ) : null
      }
      {
        (args.textarea !== undefined) ? (
          <Fragment>
            <CcForm.Label >
              <span className="label-text">Best fantasy franchise</span>
              <span className="label-text-alt">Alt label</span>
            </CcForm.Label>
            <CcTextArea {...args.textarea} />
            <CcForm.Label >
              <span className="label-text">Best fantasy franchise</span>
              <span className="label-text-alt">Alt label</span>
            </CcForm.Label>

          </Fragment>
        ) : null
      }
    </CcForm>
  )
}


export const WithCheckbox = FormTemplate.bind({})
WithCheckbox.args = { checkbox:{color:undefined}}

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

export const WithSelect = FormTemplate.bind({})
WithSelect.args = { select: {size: 'md', className:'w-full'}}

export const WithToggle = FormTemplate.bind({})
WithToggle.args = { toggle:{ color:undefined }}

export const WithTogglePrimary = FormTemplate.bind({})
WithTogglePrimary.args = { toggle:{ color: 'primary' }}

export const WithToggleSecondary = FormTemplate.bind({})
WithToggleSecondary.args = { toggle:{ color: 'secondary' }}

export const WithToggleAccent = FormTemplate.bind({})
WithToggleAccent.args = {toggle:{ color: 'accent' }}

export const WithTextArea = FormTemplate.bind({})
WithTextArea.args = { textarea:{ color:undefined }}