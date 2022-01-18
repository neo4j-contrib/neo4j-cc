import { CreateOrganizationInput } from './create-organization.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrganizationInput extends PartialType(
  CreateOrganizationInput,
  InputType,
) {}
