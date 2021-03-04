import { InputType, PartialType } from '@nestjs/graphql';
import { DataCatalog } from '../data-catalog.entity';

@InputType()
export class UpdateDataCatalogInput extends PartialType(
  DataCatalog,
  InputType,
) {}
