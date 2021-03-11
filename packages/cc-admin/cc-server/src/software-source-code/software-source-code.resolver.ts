import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SoftwareSourceCodeService } from './software-source-code.service';
import { SoftwareSourceCode } from './software-source-code.entity';
import { CreateSoftwareSourceCodeInput } from './dto/create-software-source-code.input';
import { UpdateSoftwareSourceCodeInput } from './dto/update-software-source-code.input';

@Resolver(() => SoftwareSourceCode)
export class SoftwareSourceCodeResolver {
  constructor(
    private readonly softwareSourceCodeService: SoftwareSourceCodeService,
  ) {}

  @Mutation(() => SoftwareSourceCode)
  createSoftwareSourceCode(
    @Args('createSoftwareSourceCodeInput')
    createSoftwareSourceCodeInput: CreateSoftwareSourceCodeInput,
  ) {
    return this.softwareSourceCodeService.create(createSoftwareSourceCodeInput);
  }

  @Query(() => [SoftwareSourceCode], { name: 'softwareSourceCodes' })
  findAll() {
    return this.softwareSourceCodeService.findAll();
  }

  @Query(() => SoftwareSourceCode, { name: 'softwareSourceCode' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.softwareSourceCodeService.findOne(id);
  }

  @Mutation(() => SoftwareSourceCode)
  updateSoftwareSourceCode(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateSoftwareSourceCodeInput')
    updateSoftwareSourceCodeInput: UpdateSoftwareSourceCodeInput,
  ) {
    return this.softwareSourceCodeService.update(
      id,
      updateSoftwareSourceCodeInput,
    );
  }

  @Mutation(() => Boolean)
  removeSoftwareSourceCode(@Args('id', { type: () => ID }) id: string) {
    return this.softwareSourceCodeService.remove(id);
  }
}
