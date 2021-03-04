import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DataCatalog as CreativeWorkDTS } from 'schema-dts';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

type ISODateTime = string;

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

  @Column()
  @Field(() => String)
  name!: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  url?: string;
}

@ObjectType()
export abstract class CreativeWork
  extends Thing
  implements Partial<CreativeWorkDTS> {
  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  author?: string;

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
