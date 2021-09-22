import { InputType, PartialType } from '@nestjs/graphql';
import { CreateDataCatalogInput } from './create-data-catalog.input';

@InputType()
export class UpdateDataCatalogInput extends PartialType(
  CreateDataCatalogInput,
) {}
