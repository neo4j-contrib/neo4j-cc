import './tailwind-imports.css';

import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+
import { range, map } from "fp-ts/NonEmptyArray"
import { pipe } from "fp-ts/function"

import { PersonsDocument, mockPerson } from '@neo4j-cc/data-access/person'

export const parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
    addTypeName: true,
    mocks: [
      {
        delay: 1000,
        // cache: new InMemoryCache(),
        request: {
          query: PersonsDocument
        },
        result: () => {
          return {
            data: {
              persons: pipe(range(1,12), map(_ => mockPerson()))
            }
          }
        }
      }
    ]

  },
};
