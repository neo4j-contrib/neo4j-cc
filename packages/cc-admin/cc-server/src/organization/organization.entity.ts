import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Organization as OrganizationDTS } from 'schema-dts';
import { Thing } from 'src/abstract-entity/base-entities';
import { Column, Entity } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asDTS: OrganizationDTS = {
  '@type': 'Organization',
  name: 'Acme, Inc.',
  description: 'if you need it, we have it', 
  image: 'https://neo4j.com/logo.png',
  email: ['devrel@neo4j.com', 'neo4j@neo4j.com'],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prototypical: Organization = {
  id: '123456678',
  name: 'Acme, Inc.',
  description: 'we can sell you anything',
  labels: ['Neo4j Staff'],
  url: 'https://neo4j.com/',
  email: 'abk@abk.com',
};

/**
 * An organization such as a school, NGO, corporation, club, etc.
 */
@Entity()
@ObjectType()
export class Organization extends Thing implements Partial<typeof asDTS> {
  @Column({ nullable: true })
  @Field(() => String, {
    nullable: true,
    description: 'Primary email address',
  })
  email?: string;
}
