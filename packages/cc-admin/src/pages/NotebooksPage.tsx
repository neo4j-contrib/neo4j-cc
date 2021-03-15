import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { fold } from 'fp-ts/lib/Either';
import { IntrospectionSchema } from 'graphql';
import { CcDataForm } from '../components/CcDataForm';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { NotebooksQuery, useCreateNotebookMutation, useNotebooksQuery } from '../graphql/generated'

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateNotebookInput')
)

export const NotebooksPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Notebooks">
        <p>
          A literate programming mix of prose, code and data.
        </p>
        <p>
          See:
        </p>
        <ul>
            <li><a href="https://schema.org/SoftwareSourceCode">schema.org/SoftwareSourceCode</a></li>
            <li><a href="https://schema.org/TechnicalArticle">schema.org/TechnicalArticle</a></li>
        </ul>
    </SummaryPanel>

    {pipe(    
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateNotebookMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}
    <QueryResultTable useQueryHook={useNotebooksQuery} accessor={(r:NotebooksQuery) => r.notebooks} />
  </div>
)

