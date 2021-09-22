import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreativeWork } from 'src/base-entity/entities';
import { SoftwareSourceCode as SoftwareSourceCodeDTS } from 'schema-dts';
import { Column, Entity } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prototypical: SoftwareSourceCodeDTS = {
  '@type': 'SoftwareSourceCode',
  codeRepository: "https://github.com/neo4j-cc/cc",
  programmingLanguage: 'TypeScript',
  runtimePlatform: 'nodejs',
};

@Entity()
@ObjectType()
export class SoftwareSourceCode extends CreativeWork {
  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description:
      'Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).',
  })
  codeRepository?: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description: 'The computer programming language.',
  })
  programmingLanguage?: string;

  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description:
      'Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).',
  })
  runtimePlatform?: string;
}
