import { InputType, OmitType } from '@nestjs/graphql';
import { Dataset } from '../dataset.entity';

@InputType()
export class CreateDatasetInput extends OmitType(
  Dataset,
  ['id'] as const,
  InputType,
) {}
