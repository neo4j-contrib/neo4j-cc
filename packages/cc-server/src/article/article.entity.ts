import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Article as ArticleDTS, TechArticle } from 'schema-dts';
import { CreativeWork } from 'src/base-entity/entities';
import { Entity } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: ArticleDTS = {
  '@type': 'Article',
  name: '30 Days of Data',
  description: '',
  url: '',
};

@Entity()
@ObjectType()
export class Article extends CreativeWork implements Partial<typeof asDTS> {}
