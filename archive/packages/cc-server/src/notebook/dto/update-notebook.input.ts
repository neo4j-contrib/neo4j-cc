import { InputType, PartialType } from '@nestjs/graphql';
import { CreateNotebookInput } from './create-notebook.input';

@InputType()
export class UpdateNotebookInput extends PartialType(
  CreateNotebookInput,
  InputType,
) {}
