import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String, { defaultValue: 'Unidentified' })
  firstName!: string;

  @Column()
  @Field(() => String)
  lastName: string;

  @Column({ default: true })
  @Field(() => Boolean, { defaultValue: true })
  isActive: boolean;
}
