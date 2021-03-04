import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label:string;
  name:string;
}

export const CCTextInput:React.FC<TextInputProps> = ({label, ...props}) => {
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
