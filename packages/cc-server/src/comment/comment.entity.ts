import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Comment as CommentDTS } from 'schema-dts';
import { CreativeWork, Thing } from 'src/abstract-entity/base-entities';
import { Column, Entity } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: CommentDTS = {
  '@type': 'Comment',
  name: 'Desktop update fails',
  text: 'What can I do to fix this?',
  url: 'http://something/something/comments/4',
  // parentItem: { '@id': 'http://something/something/comments/3' },
  upvoteCount: 1,
  downvoteCount: 2,
};

@Entity()
@ObjectType()
export class Comment extends CreativeWork implements Partial<typeof asDTS> {
  /**
   * Part of CreativeWork, but only used here.
   */
  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => Int, {
    description:
      'The number of upvotes this question, answer or comment has received from the community.',
  })
  upvoteCount: number;

  @Field(() => Int, {
    description:
      'The number of downvotes this question, answer or comment has received from the community.',
  })
  downvoteCount: number;
}
