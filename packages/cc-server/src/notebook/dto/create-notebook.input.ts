import { InputType, OmitType } from '@nestjs/graphql';
import { Notebook } from '../notebook.entity';

@InputType()
export class CreateNotebookInput extends OmitType(
  Notebook,
  ['id'] as const,
  InputType,
) {}
