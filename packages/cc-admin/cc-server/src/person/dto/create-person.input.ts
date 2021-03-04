import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { Person } from '../person.entity';

@InputType()
export class CreatePersonInput extends PartialType(
  OmitType(Person, ['id'] as const),
  InputType,
) {}
