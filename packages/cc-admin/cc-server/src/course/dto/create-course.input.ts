import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Course } from '../course.entity';

@InputType()
export class CreateCourseInput extends OmitType(
  Course,
  ['id'] as const,
  InputType,
) {}
