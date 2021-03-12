import React, { FC, Fragment } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import * as faker from 'faker';

import { PersonRecord } from 'services/user-provider';

export const fakePerson = ():PersonRecord => ({
    "@type": 'Person',
    identifier: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    summary: faker.lorem.sentence(5),
    email: faker.internet.email(),
    image: "https://i.pravatar.cc/300",
    username: faker.internet.userName()
  })

