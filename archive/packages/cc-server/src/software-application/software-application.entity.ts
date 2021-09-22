import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { SoftwareApplication as SoftwareApplicationDTS } from 'schema-dts';
import { CreativeWork } from 'src/base-entity/entities';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prototypical: SoftwareApplicationDTS = {
  '@type': 'SoftwareApplication',
  softwareVersion: '1.2.3',
  isBasedOn: 'http://some.other.software/fork/or/previous/version',
};

@Entity()
@ObjectType()
export class SoftwareApplication extends CreativeWork {
  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description: 'Semantic version of the software instance.',
  })
  softwareVersion?: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description: 'Type of software application, e.g. "Game, Multimedia".',
  })
  applicationCategory?: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description: 'If the file can be downloaded, URL to download the binary.',
  })
  downloadUrl?: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description:
      'URL at which the app may be installed, if different from the URL of the item.',
  })
  installUrl?: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description:
      'Operating systems supported (Windows 7, OSX 10.6, Android 1.6).',
  })
  operatingSystem?: string;
}
