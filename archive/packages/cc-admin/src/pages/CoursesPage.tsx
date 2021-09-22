
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { CoursesQuery, useCreateCourseMutation, useCoursesQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateCourseInput')
)

export const CoursesPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Courses">
        <p className="mt-1 text-sm text-gray-600">
        A description of an educational course which may be offered as distinct instances at which take place at 
        different times or take place at different locations, or be offered through different media or modes of study. 
        An educational course is a sequence of one or more educational events and/or creative works which aims to build 
        knowledge, competence or ability of learners.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Course">schema.org/Course</a>
        </p>
    </SummaryPanel>

    {pipe(    
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateCourseMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useCoursesQuery} accessor={(r:CoursesQuery) => r.courses} />
  </div>
)

