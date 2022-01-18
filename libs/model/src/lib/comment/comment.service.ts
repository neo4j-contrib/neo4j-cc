import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/base-entity/entity.service';
import { Repository } from 'typeorm';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService extends EntityService<
  Comment,
  CreateCommentInput,
  UpdateCommentInput
> {
  constructor(
    @InjectRepository(Comment)
    entityRepository: Repository<Comment>,
  ) {
    super(entityRepository);
  }
}
