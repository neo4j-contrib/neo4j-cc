import { Module } from '@nestjs/common';
import { Neo4jSchemaProvider } from './neo4j-schema.provider';

@Module({
  providers: [Neo4jSchemaProvider],
  exports: [Neo4jSchemaProvider]
})
export class Neo4jGraphqlModule {}
