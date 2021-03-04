import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useCreateUserMutation } from '../services/graphql';
import { CcTextInput } from './CcTextInput';

export const FormButtons:React.FC = () => (
  <div className="pt-5">
    <div className="flex justify-end">
      <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Cancel
      </button>
      <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save
      </button>
    </div>
  </div>
)

export const UserForm = () => {
  const [, createUser] = useCreateUserMutation();
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        createUser(values).then( success => {
          if (success.error) {console.error(success.error)}
          setSubmitting(false);
        })
      }}
    >
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">

          <Form className="space-y-6 sm:pt-10 sm:space-y-5">
            <CcTextInput
              label="First Name"
              name="firstName"
              type="text"
            />
            <CcTextInput
              label="Last Name"
              name="lastName"
              type="text"
            />

            <FormButtons />

          </Form>
        </div>
      </div>
    </Formik>
  );
};