import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { SoftwareSourceCode } from '../software-source-code.entity';

@InputType()
export class CreateSoftwareSourceCodeInput extends OmitType(
  SoftwareSourceCode,
  ['id'] as const,
  InputType,
) {}
