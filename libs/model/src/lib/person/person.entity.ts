import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';
import { Person as PersonDTS } from 'schema-dts';
import { Thing } from '../base-entity/entities';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: PersonDTS = {
  '@type': 'Person',
  name: 'Ragnar Lothbrook',
  image: 'https://gravatar.com/ragnar',
  callSign: 'ragnar',
  email: ['me@here', 'me@there'],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fromDiscourse = {
  id: 72,
  username: 'akollegger',
  name: 'Andrew Bowman',
  avatar_template:
    '/user_avatar/community.neo4j.com/andrew.bowman/{size}/73_2.png',
  active: true,
  admin: false,
  moderator: false,
  last_seen_at: '2021-02-25T22:29:58.061Z',
  last_emailed_at: '2021-02-22T02:07:25.757Z',
  created_at: '2018-08-21T15:59:46.508Z',
  last_seen_age: 30.209788196,
  last_emailed_age: 332582.513511366,
  created_at_age: 79425041.7628427,
  trust_level: 3,
  manual_locked_trust_level: null,
  flag_level: 0,
  title: 'Neo4j Staff',
  time_read: 653180,
  staged: false,
  days_visited: 679,
  posts_read_count: 11141,
  topics_entered: 2557,
  post_count: 1563,
  akismet_state: null,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prototypical: Person = {
  id: 'a guid',
  name: 'ABK',
  labels: ['Neo4j Staff'],
  url: 'https://neo4j.com/staff/abk',
  callSign: 'abk',
  email: 'abk@abk.com',
};

/**
 * A person (alive, dead, undead, or fictional).
 */
@ObjectType({implements:Thing, description:'A person (alive, dead, undead, or fictional).'})
export class Person extends Thing implements Partial<typeof asDTS> {
  @Directive('@upper(foo:"bar")')
  @Field(() => String, {
    nullable: true,
    description:
      'A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available.',
  })
  callSign?: string;

  @Directive('@relationship(from:"a", to:"b")')
  @Field(() => String, {
    nullable: true,
    description: 'Primary email address',
  })
  email?: string;
}
