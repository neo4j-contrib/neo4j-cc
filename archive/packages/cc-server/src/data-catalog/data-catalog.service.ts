import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDataCatalogInput } from './dto/create-data-catalog.input';
import { UpdateDataCatalogInput } from './dto/update-data-catalog.input';
import { DataCatalog } from './data-catalog.entity';

@Injectable()
export class DataCatalogService {
  constructor(
    @InjectRepository(DataCatalog)
    private entityRepository: Repository<DataCatalog>,
  ) {}

  async create(createDataCatalogInput: CreateDataCatalogInput) {
    return await this.entityRepository.save(createDataCatalogInput);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: string) {
    return this.entityRepository.findOne(id);
  }

  async update(id: string, updateDataCatalogInput: UpdateDataCatalogInput) {
    const entity = await this.entityRepository.findOne(id);
    this.entityRepository.merge(entity, updateDataCatalogInput);
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
