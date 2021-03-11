import React from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { BooksQuery, useCreateBookMutation, useBooksQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateBookInput')
)

export const BooksPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Books">
        <p className="mt-1 text-sm text-gray-600">
        Classic long-form written material.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Book">schema.org/Book</a>
        </p>
    </SummaryPanel>

    {pipe(    
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateBookMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useBooksQuery} accessor={(r:BooksQuery) => r.books} />
  </div>
)

