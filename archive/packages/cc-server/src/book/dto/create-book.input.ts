import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Book } from '../book.entity';

@InputType()
export class CreateBookInput extends OmitType(
  Book,
  ['id'] as const,
  InputType,
) {}
