import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  DataCatalog as DataCatalogDTS,
  Dataset as DatasetDTS,
} from 'schema-dts';
import { CreativeWork } from 'src/base-entities';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prototypicalDataCatalog: DataCatalogDTS = {
  '@type': 'DataCatalog',
  dataset: [
    {
      '@type': 'Dataset',
      distribution: {
        '@type': 'DataDownload',
        contentLocation: 'https://somewhe.re/file.csv',
      },
    },
  ],
};

@Entity()
@ObjectType()
export class DataCatalog extends CreativeWork {
  // @Column('varchar', { array: true, nullable: true })
  // @Field(() => [String])
  // dataset?: string[];
}
