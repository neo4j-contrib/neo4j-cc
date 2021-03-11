import { ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { DataCatalog as DataCatalogDTS } from 'schema-dts';
import { CreativeWork } from 'src/abstract-entity/base-entities';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prototypical: DataCatalogDTS = {
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
