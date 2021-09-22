import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Comment } from '../comment.entity';

@InputType()
export class CreateCommentInput extends OmitType(
  Comment,
  ['id'] as const,
  InputType,
) {}
