import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseResolver, CourseService],
})
export class CourseModule {}
