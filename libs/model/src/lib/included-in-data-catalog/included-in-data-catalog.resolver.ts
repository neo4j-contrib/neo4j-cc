import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { IncludedInDataCatalogService } from './included-in-data-catalog.service';
import { IncludedInDataCatalog } from './included-in-data-catalog.entity';
import { CreateIncludedInDataCatalogInput } from './dto/create-included-in-data-catalog.input';
import { UpdateIncludedInDataCatalogInput } from './dto/update-included-in-data-catalog.input';

@Resolver(() => IncludedInDataCatalog)
export class IncludedInDataCatalogResolver {
  constructor(
    private readonly includedInDataCatalogService: IncludedInDataCatalogService,
  ) {}

  @Mutation(() => IncludedInDataCatalog)
  createIncludedInDataCatalog(
    @Args('from', { type: () => ID }) from: string,
    @Args('to', { type: () => ID }) to: string,
    @Args('createIncludedInDataCatalogInput', { defaultValue: { labels: [] } })
    createIncludedInDataCatalogInput: CreateIncludedInDataCatalogInput,
  ) {
    return this.includedInDataCatalogService.create(
      from,
      to,
      createIncludedInDataCatalogInput,
    );
  }

  @Query(() => [IncludedInDataCatalog], { name: 'includedInDataCatalogs' })
  findAll() {
    return this.includedInDataCatalogService.findAll();
  }

  @Query(() => IncludedInDataCatalog, { name: 'includedInDataCatalog' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.includedInDataCatalogService.findOne(id);
  }

  @Mutation(() => IncludedInDataCatalog)
  updateIncludedInDataCatalog(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateIncludedInDataCatalogInput')
    updateIncludedInDataCatalogInput: UpdateIncludedInDataCatalogInput,
  ) {
    return this.includedInDataCatalogService.update(
      id,
      updateIncludedInDataCatalogInput,
    );
  }

  @Mutation(() => IncludedInDataCatalog)
  removeIncludedInDataCatalog(@Args('id', { type: () => ID }) id: string) {
    return this.includedInDataCatalogService.remove(id);
  }
}
