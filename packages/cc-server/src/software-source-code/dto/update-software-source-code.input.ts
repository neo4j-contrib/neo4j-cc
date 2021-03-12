import { CreateSoftwareSourceCodeInput } from './create-software-source-code.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSoftwareSourceCodeInput extends PartialType(
  CreateSoftwareSourceCodeInput,
) {}
