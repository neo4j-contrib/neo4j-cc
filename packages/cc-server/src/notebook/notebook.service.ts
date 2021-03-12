import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotebookInput } from './dto/create-notebook.input';
import { UpdateNotebookInput } from './dto/update-notebook.input';
import { Notebook } from './notebook.entity';

@Injectable()
export class NotebookService {
  constructor(
    @InjectRepository(Notebook)
    private entityRepository: Repository<Notebook>,
  ) {}

  async create(createNotebookInput: CreateNotebookInput) {
    return await this.entityRepository.save(createNotebookInput);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: string) {
    return this.entityRepository.findOne(id);
  }

  async update(id: string, updateNotebookInput: UpdateNotebookInput) {
    const entity = await this.entityRepository.findOne(id);
    this.entityRepository.merge(entity, updateNotebookInput);
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
