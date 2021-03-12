import { InputType, OmitType } from '@nestjs/graphql';
import { Person } from '../person.entity';

@InputType()
export class CreatePersonInput extends OmitType(
  Person,
  ['id'] as const,
  InputType,
) {}
