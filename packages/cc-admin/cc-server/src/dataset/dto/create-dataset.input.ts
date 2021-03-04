import { InputType, PartialType, OmitType } from '@nestjs/graphql';
import { Dataset } from '../dataset.entity';

@InputType()
export class CreateDatasetInput extends PartialType(
  OmitType(Dataset, ['id'] as const),
  InputType,
) {}
