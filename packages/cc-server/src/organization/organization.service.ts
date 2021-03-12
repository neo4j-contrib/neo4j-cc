import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationInput } from './dto/create-organization.input';
import { UpdateOrganizationInput } from './dto/update-organization.input';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private entityRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationInput: CreateOrganizationInput) {
    return await this.entityRepository.save(createOrganizationInput);
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: string) {
    return this.entityRepository.findOne(id);
  }

  async update(id: string, updateOrganizationInput: UpdateOrganizationInput) {
    const entity = await this.entityRepository.findOne(id);
    this.entityRepository.merge(entity, updateOrganizationInput);
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
