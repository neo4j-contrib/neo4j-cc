import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Course } from './course.entity';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Mutation(() => Course)
  createCourse(
    @Args('createCourseInput') createCourseInput: CreateCourseInput,
  ) {
    return this.courseService.create(createCourseInput);
  }

  @Query(() => [Course], { name: 'courses' })
  findAll() {
    return this.courseService.findAll();
  }

  @Query(() => Course, { name: 'course' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.courseService.findOne(id);
  }

  @Mutation(() => Course)
  updateCourse(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateCourseInput') updateCourseInput: UpdateCourseInput,
  ) {
    return this.courseService.update(id, updateCourseInput);
  }

  @Mutation(() => Boolean)
  removeCourse(@Args('id', { type: () => ID }) id: string) {
    return this.courseService.remove(id);
  }
}
