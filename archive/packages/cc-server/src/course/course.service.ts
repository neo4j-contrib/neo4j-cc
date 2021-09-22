import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/base-entity/entity.service';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';

@Injectable()
export class CourseService extends EntityService<
  Course,
  CreateCourseInput,
  UpdateCourseInput
> {
  constructor(
    @InjectRepository(Course)
    entityRepository: Repository<Course>,
  ) {
    super(entityRepository);
  }
}
