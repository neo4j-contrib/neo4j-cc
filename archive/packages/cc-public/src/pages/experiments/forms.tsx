import React from 'react';

import Layout from "components/SiteLayout";
import { useFormik, Form, Field, ErrorMessage } from 'formik';
import { string, object, number, SchemaOf } from 'yup';

// import {Person, WithContext} from "schema-dts";

const PersonForm = () => {
  type Person = {
    firstName: string,
    lastName: string,
    email: string,
  }
  const goodPersonSchema: SchemaOf<Partial<Person>> = object({
    firstName: string().defined(),
    lastName: string().defined(),
    email: string().defined(),
  }).defined();

  const formik = useFormik({

    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },


    validationSchema:goodPersonSchema,

    onSubmit: values => {

      alert(JSON.stringify(values, null, 2));

    },

  });
  return (

  <div>

    <h1>Person</h1>

    <form onSubmit={formik.handleSubmit} className="grid grid-cols-3 gap-2">

    <label htmlFor="firstName" className="text-right">First Name</label>
    <input
      id="firstName"
      name="firstName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
      className="rounded-full col-span-2"
    />
      <label htmlFor="lastName" className="text-right">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        className="rounded-full col-span-2"
      />
      <label htmlFor="email" className="text-right">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="rounded-full col-span-2"
      />
      <button type="submit">Submit</button>

    </form>


  </div>

)};

const FormPage = () => (
  <Layout>
    <PersonForm/>
  </Layout>
);


export default FormPage;