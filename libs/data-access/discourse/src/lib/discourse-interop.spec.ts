import 'cross-fetch/polyfill';

import { pipe } from "@effect-ts/core"
import * as Effect from "@effect-ts/core/Effect"
import * as A from "@effect-ts/core/Collections/Immutable/Array"
import * as O from "@effect-ts/core/Option"
import * as L from "@effect-ts/monocle/Lens"
import * as LO from "@effect-ts/monocle/Optional"

import { toPerson } from './discourse-interop';

import { Person } from '@neo4j-cc/model'

import * as singleUserResponse from '../resources/single-user.json'

describe('dataAccessDiscourse', () => {

  describe('dotenv prerequisites', () => {
    it('dotenv', () => {
      expect(process.env).toHaveProperty('DISCOURSE_API_TOKEN')
      expect(process.env).toHaveProperty('DISCOURSE_API_USER')
      expect(process.env).toHaveProperty('DISCOURSE_API_URL')
    });
  })

  describe('discourse/Person interop', () => {

    it('toPerson', async () => {
      const data = singleUserResponse;
      const asPerson = toPerson(data)
      
      // console.log(Person.toJSON(asPerson))
      expect(asPerson.name).toEqual("Andreas Kollegger")
    })

  })
});
