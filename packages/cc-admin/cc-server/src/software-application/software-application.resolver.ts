import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SoftwareApplicationService } from './software-application.service';
import { SoftwareApplication } from './software-application.entity';
import { CreateSoftwareApplicationInput } from './dto/create-software-application.input';
import { UpdateSoftwareApplicationInput } from './dto/update-software-application.input';

@Resolver(() => SoftwareApplication)
export class SoftwareApplicationResolver {
  constructor(
    private readonly softwareApplicationService: SoftwareApplicationService,
  ) {}

  @Mutation(() => SoftwareApplication)
  createSoftwareApplication(
    @Args('createSoftwareApplicationInput')
    createSoftwareApplicationInput: CreateSoftwareApplicationInput,
  ) {
    return this.softwareApplicationService.create(
      createSoftwareApplicationInput,
    );
  }

  @Query(() => [SoftwareApplication], { name: 'softwareApplications' })
  findAll() {
    return this.softwareApplicationService.findAll();
  }

  @Query(() => SoftwareApplication, { name: 'softwareApplication' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.softwareApplicationService.findOne(id);
  }

  @Mutation(() => SoftwareApplication)
  updateSoftwareApplication(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateSoftwareApplicationInput')
    updateSoftwareApplicationInput: UpdateSoftwareApplicationInput,
  ) {
    return this.softwareApplicationService.update(
      id,
      updateSoftwareApplicationInput,
    );
  }

  @Mutation(() => Boolean)
  removeSoftwareApplication(@Args('id', { type: () => ID }) id: string) {
    return this.softwareApplicationService.remove(id);
  }
}
