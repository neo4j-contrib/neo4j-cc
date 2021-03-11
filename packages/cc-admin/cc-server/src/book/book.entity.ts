import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book as BookDTS } from 'schema-dts';
import { CreativeWork } from 'src/abstract-entity/base-entities';
import { Entity } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: BookDTS = {
  '@type': 'Book',
  name: 'The Path is the Way',
  description: 'All things are path. Path is all things.',
  url: '',
  isbn: '123456',
};

@Entity()
@ObjectType()
export class Book extends CreativeWork implements Partial<typeof asDTS> {
  @Field(() => String, { description: 'The ISBN of the book' })
  isbn: string;
}
