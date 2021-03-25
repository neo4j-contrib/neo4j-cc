import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreativeWork as CreativeWorkDTS } from 'schema-dts';
import { CreativeWork } from 'src/base-entity/entities';
import { SoftwareSourceCode } from 'src/software-source-code/software-source-code.entity';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: CreativeWorkDTS = {
  '@type': 'CreativeWork',
  identifier: 'single-malt-scotch-whisky-graphgist',
  name: 'Single Malt Scotch Whisky GraphGist',
  url: 'http://gist.neo4j.org/?8139605',
  image: 'https://bucket.cc.dev/previews/',
  keywords: ['A', 'B'], // `labels` in Neo4j:CC
  author: {
    '@type': 'Person',
    name: 'Patrick Baumgartner',
    email: 'p.baum@somewhere.com',
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asGraphGist = {
  title: 'Single Malt Scotch Whisky GraphGist',
  url: 'http://gist.neo4j.org/?8139605',
  slug: 'single-malt-scotch-whisky-graphgist',
  author: { name: 'Patrick Baumgartner', email: null },
  id: 'single-malt-scotch-whisky-graphgist',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asPrototype: Notebook = {
  id: 'single-malt-scotch-whisky-graphgist',
  name: 'Single Malt Scotch Whisky GraphGist',
  url: 'http://gist.neo4j.org/?8139605',
  creator: 'Person url',
  dateCreated: '2020-01-01',
  dateModified: '2020-02-18',
  labels: ['Alcohol'], // `keywords` in schema.org DTS
  inLanguage: 'en-US',
};

@Entity()
@ObjectType()
export class Notebook extends SoftwareSourceCode {
  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description:
      'The spoken language of the content or performance or used in an action. Please use one of the language codes from the IETF BCP 47 standard. See also availableLanguage. Supersedes language.',
  })
  inLanguage?: string;
}
