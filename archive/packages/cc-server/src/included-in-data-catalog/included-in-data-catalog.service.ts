import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataCatalog } from 'src/data-catalog/data-catalog.entity';
import { Dataset } from 'src/dataset/dataset.entity';
import { Repository } from 'typeorm';
import { CreateIncludedInDataCatalogInput } from './dto/create-included-in-data-catalog.input';
import { UpdateIncludedInDataCatalogInput } from './dto/update-included-in-data-catalog.input';
import { IncludedInDataCatalog } from './included-in-data-catalog.entity';
import * as TE from 'fp-ts/TaskEither';
import * as E from 'fp-ts/Either';
import * as T from 'fp-ts/Task';
import { absurd, flow, pipe } from 'fp-ts/function';
import { sequenceT } from 'fp-ts/lib/Apply';

@Injectable()
export class IncludedInDataCatalogService {
  constructor(
    @InjectRepository(IncludedInDataCatalog)
    private entityRepository: Repository<IncludedInDataCatalog>,
    @InjectRepository(Dataset)
    private fromRepository: Repository<Dataset>,
    @InjectRepository(DataCatalog)
    private toRepository: Repository<DataCatalog>,
  ) {}

  getFrom = (id: string) =>
    pipe(
      TE.tryCatch(
        () => this.fromRepository.findOne(id),
        (reason) =>
          new Error(
            `Failed to get Relationship 'from entity', because ${reason}`,
          ),
      ),
    );

  getTo = (id: string) =>
    pipe(
      TE.tryCatch(
        () => this.toRepository.findOne(id),
        (reason) =>
          new Error(
            `Failed to get Relationship 'to entity', because ${reason}`,
          ),
      ),
    );

  async create(
    from: string,
    to: string,
    createIncludedInDataCatalogInput: CreateIncludedInDataCatalogInput,
  ) {
    const createdRelationship = pipe(
      sequenceT(TE.taskEither)(this.getFrom(from), this.getTo(to)),
      TE.map(([fromThis, toThat]) => {
        const relationship: Partial<IncludedInDataCatalog> = createIncludedInDataCatalogInput;
        relationship.from = fromThis;
        relationship.to = toThat;
        return relationship;
      }),
      TE.chainW((preparedRelationship) =>
        TE.tryCatch(
          () => {
            console.log(preparedRelationship);
            return this.entityRepository.save(
              this.entityRepository.create(preparedRelationship),
            );
          },
          (reason) => new Error(`${reason}`),
        ),
      ),
    );
    return createdRelationship().then((e) => {
      const result = pipe(
        e,
        E.fold(
          (l) => Promise.reject(l),
          (r) => Promise.resolve(r),
        ),
      );
      return result;
    });
  }

  findAll() {
    return `This action returns all includedInDataCatalog`;
  }

  findOne(id: string) {
    return `This action returns a #${id} includedInDataCatalog`;
  }

  update(
    id: string,
    updateIncludedInDataCatalogInput: UpdateIncludedInDataCatalogInput,
  ) {
    return `This action updates a #${id} includedInDataCatalog`;
  }

  remove(id: string) {
    return `This action removes a #${id} includedInDataCatalog`;
  }
}
