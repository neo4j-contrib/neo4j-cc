import { InputType, PartialType } from '@nestjs/graphql';
import { Dataset } from '../dataset.entity';

@InputType()
export class UpdateDatasetInput extends PartialType(Dataset, InputType) {}
