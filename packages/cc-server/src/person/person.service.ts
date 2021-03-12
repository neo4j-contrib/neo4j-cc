import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/abstract-entity/entity.service';
import { Repository } from 'typeorm';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person } from './person.entity';

@Injectable()
export class PersonService extends EntityService<
  Person,
  CreatePersonInput,
  UpdatePersonInput
> {
  constructor(
    @InjectRepository(Person)
    entityRepository: Repository<Person>,
  ) {
    super(entityRepository);
  }
}
