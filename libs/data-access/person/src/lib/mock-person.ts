import { Person } from './generated';
import faker from 'faker';

export const mockPerson = ():Person => ({
  __typename: 'Person',
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  description: faker.company.catchPhrase(),
  url: faker.internet.url(),
  callSign: faker.internet.userName(),
  labels: [faker.name.jobArea(), faker.name.jobType()]
})