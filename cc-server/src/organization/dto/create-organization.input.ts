import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Organization } from '../organization.entity';

@InputType()
export class CreateOrganizationInput extends OmitType(
  Organization,
  ['id'] as const,
  InputType,
) {}
