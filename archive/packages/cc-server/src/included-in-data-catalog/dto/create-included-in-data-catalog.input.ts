import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { IncludedInDataCatalog } from '../included-in-data-catalog.entity';

@InputType()
export class CreateIncludedInDataCatalogInput extends OmitType(
  IncludedInDataCatalog,
  ['id', 'from', 'to'] as const,
  InputType,
) {}
