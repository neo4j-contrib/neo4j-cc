import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private entityRepository: Repository<Person>,
  ) {}

  async create(createPersonInput: CreatePersonInput) {
    return await this.entityRepository.save(createPersonInput);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: string) {
    return this.entityRepository.findOne(id);
  }

  async update(id: string, updatePersonInput: UpdatePersonInput) {
    const entity = await this.entityRepository.findOne(updatePersonInput.id);
    this.entityRepository.merge(entity, updatePersonInput);
    return await this.entityRepository.save(entity);
  }

  async remove(id: string) {
    return this.entityRepository.findOne(id).then(
      (found) => {
        if (found !== undefined) {
          this.entityRepository.remove(found);
          return true;
        } else return false;
      },
      () => false,
    );
  }
}
