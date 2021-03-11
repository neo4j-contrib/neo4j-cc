import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/abstract-entity/entity.service';
import { Repository } from 'typeorm';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Article } from './article.entity';

@Injectable()
export class ArticleService extends EntityService<
  Article,
  CreateArticleInput,
  UpdateArticleInput
> {
  constructor(
    @InjectRepository(Article)
    entityRepository: Repository<Article>,
  ) {
    super(entityRepository);
  }
}
