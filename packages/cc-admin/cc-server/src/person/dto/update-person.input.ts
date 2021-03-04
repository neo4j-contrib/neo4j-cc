import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Person } from '../person.entity';

@InputType()
export class UpdatePersonInput extends PartialType(Person, InputType) {}
