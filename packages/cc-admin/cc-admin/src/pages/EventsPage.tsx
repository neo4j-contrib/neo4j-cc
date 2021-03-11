import React from 'react';
import { QueryResultTable } from '../components/QueryResultTable';
import { SummaryPanel } from '../components/SummaryPanel';
import { EventsQuery, useCreateEventMutation, useEventsQuery } from '../graphql/generated';

import { pipe, unsafeCoerce } from 'fp-ts/lib/function';
import { IntrospectionSchema } from 'graphql';
import { fold } from 'fp-ts/lib/Either';
import { CcDataForm } from '../components/CcDataForm';

import { findIntrospectionInputObject } from '../graphql/utils';
import {__schema as introspection} from '../graphql/introspection.json';

const introspectionInputObjectOrNotFound = pipe(    
  unsafeCoerce<any,IntrospectionSchema>(introspection),
  findIntrospectionInputObject('CreateEventInput')
)

export const EventsPage = () => (
  <div className="flex flex-col space-y-4">
    <SummaryPanel title="Events">
        <p className="mt-1 text-sm text-gray-600">
        An event happening at a certain time and location, such as a concert, lecture, or festival.
        Repeated events may be structured as separate Event objects.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          <a href="https://schema.org/Event">schema.org/Event</a>
        </p>
    </SummaryPanel>

    {pipe(    
      introspectionInputObjectOrNotFound,
      fold(
        (e) => {throw new Error(e)},
        (introspectionInputObject) => (<CcDataForm useMutationHook={useCreateEventMutation} introspectionInputObject={introspectionInputObject} />),
        )
    )}

    <QueryResultTable useQueryHook={useEventsQuery} accessor={(r:EventsQuery) => r.events} />
  </div>
)

