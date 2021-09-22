import '@relmify/jest-fp-ts';

import * as T from '@effect-ts/core/Effect';
import * as MO from '@effect-ts/schema';
import { Model } from '@effect-ts/schema';
import { ActivityType, parseActivityType } from './orbit.model';

export class Person extends Model<Person>()(
  MO.props({
    _tag: MO.prop(MO.literal('Person')),
    firstName: MO.prop(MO.string),
  }),
) {}

describe('Person', () => {
  it('constructs', () => {
    const person = new Person({ firstName: 'Andreas' });
    expect(Person.Guard(person)).toBeTruthy();
  });
});

const exampleActivityType = {
  id: '12',
  attributes: {
    name: 'Opened an issue',
    short_name: 'Issue opened',
    key: 'issues:opened',
    channel: 'github',
    weight: '1.0',
  },
};
describe('ActivityType', () => {
  it('constructs', () => {
    const x = new ActivityType(exampleActivityType);
    expect(ActivityType.Guard(x)).toBeTruthy();
  });
  it('parses', async () => {
    const x = await T.runPromise(
      T.either(parseActivityType(JSON.stringify(exampleActivityType))),
    );
    expect(x).toBeLeft();
  });
});
