import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './person.entity';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  createPerson(
    @Args('createPersonInput') createPersonInput: CreatePersonInput,
  ) {
    return this.personService.create(createPersonInput);
  }

  @Query(() => [Person], { name: 'persons' })
  findAll() {
    return this.personService.findAll();
  }

  @Query(() => Person, { name: 'person' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.personService.findOne(id);
  }

  @Mutation(() => Person)
  updatePerson(
    @Args('updatePersonInput') updatePersonInput: UpdatePersonInput,
  ) {
    return this.personService.update(updatePersonInput.id, updatePersonInput);
  }

  @Mutation(() => Boolean)
  removePerson(@Args('id', { type: () => ID }) id: string) {
    return this.personService.remove(id);
  }
}
