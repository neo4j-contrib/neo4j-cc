import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label:string;
  name:string;
  description?:string | null;
}

export const CcTextInput:React.FC<TextInputProps> = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
    <label htmlFor={props.id || props.name}
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
    </label>
    <div className="mt-1 sm:mt-0 sm:col-span-2">
      <input 
        {...field}
        {...props}
        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"/>
        {
          meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null
        }
    </div>
  </div>
  )
}

export const CcCheckbox:React.FC<TextInputProps> = ({label, description,...props}) => {
  const [field, meta] = useField(props);

  return (
  <div className="flex items-start">
    <div className="h-5 flex items-center">
      <input 
        {...field}
        {...props}
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={props.id || props.name} className="font-medium text-gray-700">{label}</label>
      {
        meta.touched && meta.error ? (
          <p className="error">{meta.error}</p>
        ) : 
        (<p className="text-gray-500">{description}</p>)
      }
    </div>
  </div>
  )
}