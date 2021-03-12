import React from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { ArticlesQuery, useCreateArticleMutation, useArticlesQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateArticleInput')
)

export const ArticlesPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Articles">
        <p className="mt-1 text-sm text-gray-600">
        An article, such as a news article or piece of investigative report. Newspapers and magazines have 
        articles of many different types and this is intended to cover them all.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Article">schema.org/Article</a>
        </p>
    </SummaryPanel>

    {pipe(    
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateArticleMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useArticlesQuery} accessor={(r:ArticlesQuery) => r.articles} />
  </div>
)

