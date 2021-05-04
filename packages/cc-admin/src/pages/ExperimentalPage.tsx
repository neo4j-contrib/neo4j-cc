import { Form, Formik } from 'formik';
import { CCTextList } from '../components/CcFormInputs';
import { SummaryPanel } from '../components/SummaryPanel';

// import { useState } from 'react';

export const ExperimentalPage = () => {

  return (
    <div className="flex flex-col space-y-4">
      <SummaryPanel title="Home">
          <p className="mt-1 text-sm text-gray-600">
            Experimental.
          </p>
      </SummaryPanel>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <Formik
            initialValues={{ items: ["hello", "goodbye", "thank you"] }}
            onSubmit={values => {
              console.log(values);
              return;
            }}
            render={() => (
              <Form>
                <CCTextList name="items" />
                <div>
                  <button type="submit">Submit</button>
                </div>
              </Form>
            )}
          />

        </div>
      </div>

    </div>

  )
}
