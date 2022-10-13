import { allToCsv, allToCsv_ } from './data-access-csv';

import { pipe } from '@neo4j-cc/prelude'

const sampleJson = [
  {
    id: 'MDEwOlJlcG9zaXRvcnk0ODM2Nzg=',
    url: 'https://github.com/mongoid/mongo_session_store',
    owner: 'mongoid',
    name: 'mongo_session_store',
    nameWithOwner: 'mongoid/mongo_session_store',
    description:
      'MongoSessionStore is a Rails-compatible session store for MongoDB using either Mongoid or the MongoDB Ruby Driver. It also allows for custom Mongo session store that works with any (or no!) Mongo ODM',
    updatedAt: '2022-07-07T06:20:48Z',
    createdAt: '2010-01-22T11:00:01Z',
    isTemplate: false,
    repositoryTopics: ['ruby', 'mongoid', 'rails', 'mongodb', 'sessions', 'session-storage', 'session-management'] ,
    languages: ['Ruby', 'HTML'],
    forks: 32 ,
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk1MjIyMjU=',
    url: 'https://github.com/mongodb-labs/sleepy.mongoose',
    owner: 'mongodb-labs',
    name: 'sleepy.mongoose',
    nameWithOwner: 'mongodb-labs/sleepy.mongoose',
    description:
      '[Archive] A REST interface for MongoDB - This Repository is NOT a supported MongoDB product',
    updatedAt: '2022-09-27T18:01:49Z',
    createdAt: '2010-02-17T18:26:00Z',
    isTemplate: false,
    repositoryTopics: ['python', 'mongodb', 'rest-api'],
    languages: ['Python'],
    forks: 100 ,
  },
  {
    id: 'MDEwOlJlcG9zaXRvcnk2OTk2ODk=',
    url: 'https://github.com/mongodb/mongo-csharp-driver',
    owner: 'mongodb',
    name: 'mongo-csharp-driver',
    nameWithOwner: 'mongodb/mongo-csharp-driver',
    description: '.NET Driver for MongoDB',
    updatedAt: '2022-10-09T11:50:20Z',
    createdAt: '2010-06-02T18:22:21Z',
    isTemplate: false,
    repositoryTopics: ['mongodb'],
    languages: ['JavaScript','C#','Makefile','Shell', 'PowerShell','Python','Visual Basic .NET','Perl'], 
    forks: 1182,
  },
];

const expectedCsv = "\"id\",\"url\",\"owner\",\"name\",\"nameWithOwner\",\"description\",\"updatedAt\",\"createdAt\",\"isTemplate\",\"repositoryTopics\",\"languages\",\"forks\"\r\n\"MDEwOlJlcG9zaXRvcnk0ODM2Nzg=\",\"https://github.com/mongoid/mongo_session_store\",\"mongoid\",\"mongo_session_store\",\"mongoid/mongo_session_store\",\"MongoSessionStore is a Rails-compatible session store for MongoDB using either Mongoid or the MongoDB Ruby Driver. It also allows for custom Mongo session store that works with any (or no!) Mongo ODM\",\"2022-07-07T06:20:48Z\",\"2010-01-22T11:00:01Z\",\"false\",\"ruby,mongoid,rails,mongodb,sessions,session-storage,session-management\",\"Ruby,HTML\",\"32\"\r\n\"MDEwOlJlcG9zaXRvcnk1MjIyMjU=\",\"https://github.com/mongodb-labs/sleepy.mongoose\",\"mongodb-labs\",\"sleepy.mongoose\",\"mongodb-labs/sleepy.mongoose\",\"[Archive] A REST interface for MongoDB - This Repository is NOT a supported MongoDB product\",\"2022-09-27T18:01:49Z\",\"2010-02-17T18:26:00Z\",\"false\",\"python,mongodb,rest-api\",\"Python\",\"100\"\r\n\"MDEwOlJlcG9zaXRvcnk2OTk2ODk=\",\"https://github.com/mongodb/mongo-csharp-driver\",\"mongodb\",\"mongo-csharp-driver\",\"mongodb/mongo-csharp-driver\",\".NET Driver for MongoDB\",\"2022-10-09T11:50:20Z\",\"2010-06-02T18:22:21Z\",\"false\",\"mongodb\",\"JavaScript,C#,Makefile,Shell,PowerShell,Python,Visual Basic .NET,Perl\",\"1182\"";

describe('allToCsv', () => {
  it('should convert json to csv formatted string', () => {
    const actualCsv = allToCsv_(sampleJson, {
      quotes:true
    });
    expect(actualCsv).toEqual(expectedCsv);
  });
  it('should be pipeable', () => {
    const actualCsv = pipe(
      sampleJson,
      allToCsv({
        quotes:true
      }),
    );
    expect(actualCsv).toEqual(expectedCsv);
  });
});
