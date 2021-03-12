import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityService } from 'src/abstract-entity/entity.service';
import { Repository } from 'typeorm';
import { CreateSoftwareSourceCodeInput } from './dto/create-software-source-code.input';
import { UpdateSoftwareSourceCodeInput } from './dto/update-software-source-code.input';
import { SoftwareSourceCode } from './software-source-code.entity';

@Injectable()
export class SoftwareSourceCodeService extends EntityService<
  SoftwareSourceCode,
  CreateSoftwareSourceCodeInput,
  UpdateSoftwareSourceCodeInput
> {
  constructor(
    @InjectRepository(SoftwareSourceCode)
    entityRepository: Repository<SoftwareSourceCode>,
  ) {
    super(entityRepository);
  }
}
