import React, { PropsWithChildren } from 'react';
import { Formik, Form } from 'formik';
import { CcCheckbox, CcTextInput } from './CcFormInputs';
import { IntrospectionInputObjectType, IntrospectionInputTypeRef, IntrospectionInputValue } from 'graphql';
import { map, toNullable, fromNullable } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';
import { capitalCase } from "capital-case";
import { UseMutationResponse } from 'urql';
import { Exact } from '../graphql/generated';

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

const defaultValueFrom = (field:IntrospectionInputValue) => field.defaultValue ? JSON.parse(field.defaultValue) : undefined;

const initialValuesFrom = (fields:Readonly<IntrospectionInputValue[]>) => {
  return fields.reduce( (acc, field) => {
    acc[field.name] = defaultValueFrom(field); 
    return acc
  }, 
  {} as any)
}

const kindOf = (type:IntrospectionInputTypeRef):string => {
  switch (type.kind) {
    case 'SCALAR': return type.name;
    case 'NON_NULL': return kindOf(type.ofType);
    default: return 'unknown';
  }
}

const formFieldFor = (field:IntrospectionInputValue) => {
  switch (kindOf(field.type)) {
    case 'String': return (
      <CcTextInput
        label={capitalCase(field.name)}
        name={field.name}
        type="text"
      />
    )
    case 'Boolean': return (
      <CcCheckbox
        label={capitalCase(field.name)}
        name={field.name}
        description={field.description}
        type="checkbox"
        />
    )
    default: return (<p>UNSUPPORTED: {JSON.stringify(field)}</p>)
  }
}


export interface CcDataFormProps<Data,Variables> {
  // useMutationHook: UseMutationResponse<T, V>;
  useMutationHook: () => UseMutationResponse<Data, Exact<{input:Variables}>>;
  introspectionInputObject: IntrospectionInputObjectType;
  // accessor: (r:T) => D[]
}

export const CcDataForm = <T,V>({useMutationHook, introspectionInputObject: inputObject}:PropsWithChildren<CcDataFormProps<T,V>>) => {
  const [result, createRecord] = useMutationHook();

  console.log(result);

  const inputFields = pipe(
    fromNullable(inputObject),
    map<IntrospectionInputObjectType,Readonly<IntrospectionInputValue[]>> (({inputFields}) => inputFields),
  );

  const initialValues = pipe(
    inputFields,
    map(inputFields => initialValuesFrom(inputFields) )
  );

  const formFields = pipe(
    inputFields,
    map(fields => fields.map(formFieldFor))
  )
  
  return (
    <Formik
      initialValues={toNullable(initialValues)}
      // validationSchema={Yup.object({
      //   firstName: Yup.string()
      //     .max(15, 'Must be 15 characters or less')
      //     .required('Required'),
      //   lastName: Yup.string()
      //     .max(20, 'Must be 20 characters or less')
      //     .required('Required'),
      // })}
      onSubmit={(values, { setSubmitting }) => {
        createRecord({input:values}).then( success => {
          if (success.error) {console.error(success.error)}
          setSubmitting(false);
        })
      }}
    >
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">

          <Form className="space-y-6 sm:pt-10 sm:space-y-5">

            {toNullable(formFields)}

            <FormButtons />

          </Form>
        </div>
      </div>
    </Formik>
  );
};