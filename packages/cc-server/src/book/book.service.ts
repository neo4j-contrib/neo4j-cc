import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/base-entity/entity.service';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BookService extends EntityService<
  Book,
  CreateBookInput,
  UpdateBookInput
> {
  constructor(
    @InjectRepository(Book)
    entityRepository: Repository<Book>,
  ) {
    super(entityRepository);
  }
}
