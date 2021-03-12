import { CreateUserInput } from './create-user.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { User } from '../user.entity';

@InputType()
export class UpdateUserInput extends PartialType(User, InputType) {}
