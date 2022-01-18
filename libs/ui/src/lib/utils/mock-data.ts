import * as faker from 'faker';

export const mockPerson = ():Record<string, unknown> => ({
    identifier: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.sentence(5),
    email: faker.internet.email(),
    image: faker.image.imageUrl(),
    callSign: faker.internet.userName()
  })

