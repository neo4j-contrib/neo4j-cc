import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDatasetInput } from './dto/create-dataset.input';
import { UpdateDatasetInput } from './dto/update-dataset.input';
import { Dataset } from './dataset.entity';

@Injectable()
export class DatasetService {
  constructor(
    @InjectRepository(Dataset)
    private entityRepository: Repository<Dataset>,
  ) {}

  async create(createDatasetInput: CreateDatasetInput) {
    return await this.entityRepository.save(createDatasetInput);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: string) {
    return this.entityRepository.findOne(id);
  }

  async update(id: string, updateDatasetInput: UpdateDatasetInput) {
    const entity = await this.entityRepository.findOne(updateDatasetInput.id);
    this.entityRepository.merge(entity, updateDatasetInput);
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
