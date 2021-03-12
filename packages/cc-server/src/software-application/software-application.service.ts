import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/abstract-entity/entity.service';
import { Repository } from 'typeorm';

import { CreateSoftwareApplicationInput } from './dto/create-software-application.input';
import { UpdateSoftwareApplicationInput } from './dto/update-software-application.input';
import { SoftwareApplication } from './software-application.entity';

@Injectable()
export class SoftwareApplicationService extends EntityService<
  SoftwareApplication,
  CreateSoftwareApplicationInput,
  UpdateSoftwareApplicationInput
> {
  constructor(
    @InjectRepository(SoftwareApplication)
    entityRepository: Repository<SoftwareApplication>,
  ) {
    super(entityRepository);
  }
}
