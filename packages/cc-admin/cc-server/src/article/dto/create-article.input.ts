import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Article } from '../article.entity';

@InputType()
export class CreateArticleInput extends OmitType(
  Article,
  ['id'] as const,
  InputType,
) {}
