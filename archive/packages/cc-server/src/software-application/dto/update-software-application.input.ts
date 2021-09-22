import { CreateSoftwareApplicationInput } from './create-software-application.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSoftwareApplicationInput extends PartialType(
  CreateSoftwareApplicationInput,
) {}
