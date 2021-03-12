import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { OrganizationService } from './organization.service';
import { Organization } from './organization.entity';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';

@Resolver(() => Organization)
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  @Mutation(() => Organization)
  createOrganization(
    @Args('createOrganizationInput')
    createOrganizationInput: CreateOrganizationInput,
  ) {
    return this.organizationService.create(createOrganizationInput);
  }

  @Query(() => [Organization], { name: 'organizations' })
  findAll() {
    return this.organizationService.findAll();
  }

  @Query(() => Organization, { name: 'organization' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.organizationService.findOne(id);
  }

  @Mutation(() => Organization)
  updateOrganization(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateOrganizationInput')
    updateOrganizationInput: UpdateOrganizationInput,
  ) {
    return this.organizationService.update(id, updateOrganizationInput);
  }

  @Mutation(() => Boolean)
  removeOrganization(@Args('id', { type: () => ID }) id: string) {
    return this.organizationService.remove(id);
  }
}
