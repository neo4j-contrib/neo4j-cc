import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/abstract-entity/entity.service';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event } from './event.entity';

@Injectable()
export class EventService extends EntityService<
  Event,
  CreateEventInput,
  UpdateEventInput
> {
  constructor(
    @InjectRepository(Event)
    entityRepository: Repository<Event>,
  ) {
    super(entityRepository);
  }
}
