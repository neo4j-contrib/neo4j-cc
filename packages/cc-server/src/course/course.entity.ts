import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Course as CourseDTS } from 'schema-dts';
import { LearningResource } from 'src/abstract-entity/base-entities';
import { Entity } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: CourseDTS = {
  '@type': 'Course',
  name: 'The Path is the Way',
  description: 'All things are path. Path is all things.',
  url: '',
  courseCode: 'cypher-101',
  award: 'Cypher Basics Certification',
  competencyRequired: ['sql'],
  teaches: 'cypher',
  coursePrerequisites: ['sql-101'],
};

@Entity()
@ObjectType()
export class Course extends LearningResource implements Partial<typeof asDTS> {
  @Field(() => String, {
    description:
      'The identifier for the Course used by the course provider (e.g. CS101 or cypher-101)',
  })
  courseCode: string;

  @Field(() => String, {
    description:
      'The certification awarded for successful completion of this course.',
  })
  award: string;
}
