import { ObjectType, Field, Int, ID, PartialType } from '@nestjs/graphql';
import { Thing } from 'src/base-entity/entities';
import { DataCatalog } from 'src/data-catalog/data-catalog.entity';
import { Dataset } from 'src/dataset/dataset.entity';
import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

// OneToOne<DataSet, DataCatalog>
// it'd be nice to express the cardinality
// of source to target for the relationship
@Entity()
@ObjectType()
export class IncludedInDataCatalog extends Thing {
  @ManyToOne(() => Dataset)
  @JoinColumn()
  @Field(() => Dataset, { description: 'from entity UUID' })
  from: Dataset;

  @ManyToOne(() => DataCatalog)
  @JoinColumn()
  @Field(() => Dataset, { description: 'to entity UUID' })
  to: DataCatalog;
}
