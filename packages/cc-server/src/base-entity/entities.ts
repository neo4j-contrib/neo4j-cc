import { Field, ID, InterfaceType, ObjectType } from '@nestjs/graphql';
import {
  DataCatalog as CreativeWorkDTS,
  Course as LearningResourceDTS,
} from 'schema-dts';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export type ISODateTime = string;
export type ISODuration = string;
export type Guid = string;

@Entity()
@ObjectType()
export abstract class Thing {
  /**
   * Note: schema.org/Thing uses "identifier"
   */
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'UUID' })
  id: string;

  @Column('varchar', { array: true })
  @Field(() => [String], { nullable: true, defaultValue: [] })
  labels?: string[];

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name?: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description: 'A brief description of this Thing.',
  })
  description?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  url?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const creativeWorkExample: CreativeWorkDTS = {
  '@type': 'DataCatalog', // note that this is a sub-type
  about: ['http://this', 'http://that', 'http://other'],
  creator: 'ABK',
};

@ObjectType()
export abstract class CreativeWork
  extends Thing
  implements Partial<CreativeWorkDTS> {
  @Column('varchar', { array: true })
  @Field(() => [String], {
    nullable: true,
    defaultValue: [],
    description:
      'The subject matter of the content. Inverse property: subjectOf.',
  })
  about?: [string];

  @Column({ nullable: true })
  @Field(() => ID, {
    nullable: true,
    description: 'Reference to Person who created the work.',
  })
  creator?: Guid;

  @Column({ nullable: true })
  @Field(() => ID, {
    nullable: true,
    description: 'Reference to Person who published the work.',
  })
  publisher?: Guid;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  dateCreated?: ISODateTime;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  dateModified?: ISODateTime;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  license?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const learningResourceExample: LearningResourceDTS = {
  '@type': 'Course',
  about: ['http://this', 'http://that', 'http://other'],
  creator: 'ABK',
};

@ObjectType()
export abstract class LearningResource
  extends CreativeWork
  implements Partial<LearningResourceDTS> {
  /** Part of CreativeWork, but only used here. */
  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description: 'An award won by or for this LearningResource.',
  })
  award?: string;
  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description:
      'The LearningResource being described is intended to help a person learn the competency or learning outcome defined by the referenced term.',
  })
  teaches?: string;

  @Column('varchar', { array: true })
  @Field(() => [String], {
    nullable: true,
    defaultValue: [],
    description:
      'Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.',
  })
  competencyRequired?: string[];
}

@ObjectType()
export abstract class Relationship<
  From extends Thing,
  To extends Thing
> extends Thing {
  @OneToOne(() => Thing)
  @JoinColumn()
  @Field(() => ID, { description: 'from entity UUID' })
  from: From;

  @OneToOne(() => Thing)
  @JoinColumn()
  @Field(() => ID, { description: 'to entity UUID' })
  to: To;
}
