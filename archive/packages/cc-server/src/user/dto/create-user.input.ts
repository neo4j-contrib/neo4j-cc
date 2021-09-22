import { InputType, OmitType } from '@nestjs/graphql';

import { User } from '../user.entity';

@InputType()
export class CreateUserInput extends OmitType(
  User,
  ['id'] as const,
  InputType,
) {}
