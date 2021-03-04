import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { User } from '../user.entity';

@InputType()
export class CreateUserInput extends PartialType(
  OmitType(User, ['id'] as const),
  InputType,
) {}
