import { InputType, PartialType, OmitType } from '@nestjs/graphql';
import { DataCatalog } from '../data-catalog.entity';

@InputType()
export class CreateDataCatalogInput extends PartialType(
  OmitType(DataCatalog, ['id'] as const),
  InputType,
) {}
