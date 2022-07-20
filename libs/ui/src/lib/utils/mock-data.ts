// import * as faker from 'faker';
import { uuid, word, sentence, adjective, noun, emailAddress, httpUrl } from '@neo4j-cc/util-arbitrary'

export const mockPerson = ():Record<string, unknown> => ({
    identifier: uuid(),
    name: `${word()} ${word()}`,
    description: sentence(),
    email: emailAddress(),
    image: httpUrl(),
    callSign: `${adjective()} ${noun()}`
  })

