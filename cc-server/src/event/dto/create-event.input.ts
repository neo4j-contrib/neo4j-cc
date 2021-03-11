import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Event } from '../event.entity';

@InputType()
export class CreateEventInput extends OmitType(
  Event,
  ['id'] as const,
  InputType,
) {}
