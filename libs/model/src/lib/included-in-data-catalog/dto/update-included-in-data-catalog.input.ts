import { CreateIncludedInDataCatalogInput } from './create-included-in-data-catalog.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIncludedInDataCatalogInput extends PartialType(CreateIncludedInDataCatalogInput) {
  @Field(() => Int)
  id: number;
}
