import { InputType, PartialType } from '@nestjs/graphql';
import { CreateDatasetInput } from './create-dataset.input';

@InputType()
export class UpdateDatasetInput extends PartialType(
  CreateDatasetInput,
  InputType,
) {}
