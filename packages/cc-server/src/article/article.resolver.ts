import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Mutation(() => Article)
  createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput,
  ) {
    return this.articleService.create(createArticleInput);
  }

  @Query(() => [Article], { name: 'articles' })
  findAll() {
    return this.articleService.findAll();
  }

  @Query(() => Article, { name: 'article' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.articleService.findOne(id);
  }

  @Mutation(() => Article)
  updateArticle(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateArticleInput') updateArticleInput: UpdateArticleInput,
  ) {
    return this.articleService.update(id, updateArticleInput);
  }

  @Mutation(() => Boolean)
  removeArticle(@Args('id', { type: () => ID }) id: string) {
    return this.articleService.remove(id);
  }
}
