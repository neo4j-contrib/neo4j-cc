import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export abstract class EntityService<T, CreateT, UpdateT> {
  constructor(private entityRepository: Repository<T>) {}

  async create(input: CreateT) {
    return await this.entityRepository.save(input);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: string) {
    return this.entityRepository.findOne(id);
  }

  async update(id: string, updatePersonInput: UpdateT) {
    const entity = await this.entityRepository.findOne(id);
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
