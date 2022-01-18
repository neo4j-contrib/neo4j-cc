import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { SoftwareApplication } from '../software-application.entity';

@InputType()
export class CreateSoftwareApplicationInput extends OmitType(
  SoftwareApplication,
  ['id'] as const,
  InputType,
) {}
