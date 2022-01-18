import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { DatasetService } from './dataset.service';
import { Dataset } from './dataset.entity';
import { CreateDatasetInput } from './dto/create-dataset.input';
import { UpdateDatasetInput } from './dto/update-dataset.input';

@Resolver(() => Dataset)
export class DatasetResolver {
  constructor(private readonly datasetService: DatasetService) {}

  @Mutation(() => Dataset)
  createDataset(
    @Args('createDatasetInput') createDatasetInput: CreateDatasetInput,
  ) {
    return this.datasetService.create(createDatasetInput);
  }

  @Query(() => [Dataset], { name: 'datasets' })
  findAll() {
    return this.datasetService.findAll();
  }

  @Query(() => Dataset, { name: 'dataset' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.datasetService.findOne(id);
  }

  @Mutation(() => Dataset)
  updateDataset(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateDatasetInput') updateDatasetInput: UpdateDatasetInput,
  ) {
    return this.datasetService.update(id, updateDatasetInput);
  }

  @Mutation(() => Boolean)
  removeDataset(@Args('id', { type: () => ID }) id: string) {
    return this.datasetService.remove(id);
  }
}
