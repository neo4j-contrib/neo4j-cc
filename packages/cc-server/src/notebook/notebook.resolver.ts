import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { NotebookService } from './notebook.service';
import { Notebook } from './notebook.entity';
import { CreateNotebookInput } from './dto/create-notebook.input';
import { UpdateNotebookInput } from './dto/update-notebook.input';

@Resolver(() => Notebook)
export class NotebookResolver {
  constructor(private readonly notebookService: NotebookService) {}

  @Mutation(() => Notebook)
  createNotebook(
    @Args('createNotebookInput') createNotebookInput: CreateNotebookInput,
  ) {
    return this.notebookService.create(createNotebookInput);
  }

  @Query(() => [Notebook], { name: 'notebooks' })
  findAll() {
    return this.notebookService.findAll();
  }

  @Query(() => Notebook, { name: 'notebook' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.notebookService.findOne(id);
  }

  @Mutation(() => Notebook)
  updateNotebook(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateNotebookInput') updateNotebookInput: UpdateNotebookInput,
  ) {
    return this.notebookService.update(id, updateNotebookInput);
  }

  @Mutation(() => Boolean)
  removeNotebook(@Args('id', { type: () => ID }) id: string) {
    return this.notebookService.remove(id);
  }
}
