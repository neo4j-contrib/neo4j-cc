import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  ISODateTime,
  ISODuration,
  Thing,
} from 'src/abstract-entity/base-entities';
import { Entity } from 'typeorm';
import { Event as EventDTS } from 'schema-dts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: EventDTS = {
  '@type': 'Event',
  name: '30 Days of Data',
  // audience: 'data visualizers',
  duration: '2 days', // ISO 8601 duration
  endDate: '', // ISO 8601 datetime
  startDate: '', // ISO 8601 datetime
  location: 'online',
};

/**
 * An event happening at a certain time and location, such as a concert, lecture, or festival.
 * Repeated events may be structured as separate Event objects.
 */
@Entity()
@ObjectType()
export class Event extends Thing implements Partial<typeof asDTS> {
  @Field(() => String, {
    description:
      'The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.',
  })
  duration: ISODuration;

  @Field(() => String, {
    description: 'The end date and time of the item (in ISO 8601 date format).',
  })
  endDate: ISODateTime;

  @Field(() => String, {
    description:
      'The start date and time of the item (in ISO 8601 date format).',
  })
  startDate: ISODateTime;

  @Field(() => String, {
    description:
      'The location of, for example, where an event is happening, where an organization is located, or where an action takes place.',
  })
  location: string;
}
