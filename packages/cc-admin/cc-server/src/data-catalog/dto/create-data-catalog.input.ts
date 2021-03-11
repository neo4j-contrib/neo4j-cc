import { InputType, OmitType } from '@nestjs/graphql';
import { DataCatalog } from '../data-catalog.entity';

@InputType()
export class CreateDataCatalogInput extends OmitType(
  DataCatalog,
  ['id'] as const,
  InputType,
) {}
