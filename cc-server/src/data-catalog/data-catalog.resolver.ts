import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { DataCatalogService } from './data-catalog.service';
import { DataCatalog } from './data-catalog.entity';
import { CreateDataCatalogInput } from './dto/create-data-catalog.input';
import { UpdateDataCatalogInput } from './dto/update-data-catalog.input';

@Resolver(() => DataCatalog)
export class DataCatalogResolver {
  constructor(private readonly dataCatalogService: DataCatalogService) {}

  @Mutation(() => DataCatalog)
  createDataCatalog(
    @Args('createDataCatalogInput')
    createDataCatalogInput: CreateDataCatalogInput,
  ) {
    return this.dataCatalogService.create(createDataCatalogInput);
  }

  @Query(() => [DataCatalog], { name: 'dataCatalogs' })
  findAll() {
    return this.dataCatalogService.findAll();
  }

  @Query(() => DataCatalog, { name: 'dataCatalog' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.dataCatalogService.findOne(id);
  }

  @Mutation(() => DataCatalog)
  updateDataCatalog(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateDataCatalogInput')
    updateDataCatalogInput: UpdateDataCatalogInput,
  ) {
    return this.dataCatalogService.update(id, updateDataCatalogInput);
  }

  @Mutation(() => Boolean)
  removeDataCatalog(@Args('id', { type: () => ID }) id: string) {
    return this.dataCatalogService.remove(id);
  }
}
