import * as faker from 'faker';

import { Person } from 'schema-dts';

export const fakePerson = ():Partial<Person> => ({
    identifier: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.sentence(5),
    email: faker.internet.email(),
    image: "https://i.pravatar.cc/300",
    callSign: faker.internet.userName()
  })

