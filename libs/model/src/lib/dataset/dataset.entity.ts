import { Field, ObjectType } from '@nestjs/graphql';
import { CreativeWork } from 'src/base-entity/entities';
import { Column, Entity } from 'typeorm';
import { Dataset as DatasetDTS } from 'schema-dts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prototypicalDataSet: DatasetDTS = {
  '@type': 'Dataset',
  distribution: {
    '@type': 'DataDownload',
    contentLocation: 'http://somewhe.re/useful-data.csv',
  },
};

/**
 * A Dataset is an individual file within a DataCatalog.
 */
@Entity()
@ObjectType()
export class Dataset extends CreativeWork {
  @Column()
  @Field(() => String, {
    description:
      'URL to the direct data download. Distinct from the optional "url" field, which should lead to a page about the data.',
  })
  distribution: string;

  @Column()
  @Field(() => String, {
    description:
      'Media type typically expressed using a MIME format (see IANA site and MDN reference) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).',
  })
  encodingFormat: string;
}
