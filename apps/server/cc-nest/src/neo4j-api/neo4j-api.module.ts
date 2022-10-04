import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Neo4jSchemaProvider } from './neo4j-schema.provider';

import { Neo4jGraphQL } from '@neo4j/graphql';

import { JSONObjectDefinition, JSONObjectResolver } from 'graphql-scalars';
import { GraphNodeDefinition, PersonDefinition } from '@neo4j-cc/graphql-types';

import neo4j from 'neo4j-driver';


const neo4jConfig = {
  url: process.env.NEO4J_URL || 'neo4j://localhost:7687',
  scheme: 'neo4j' as const,
  host: 'localhost',
  port: '7687',
  database: process.env.NEO4J_DATABASE || 'neo4j',
  username: process.env.NEO4J_USERNAME || 'neo4j',
  password: process.env.NEO4J_PASSWORD || 'marwhompa' || 'environment is missing NEO4J_PASSWORD',
  global: true, // to register in the global scope
}

const driver = neo4j.driver(
  neo4jConfig.url,
  neo4j.auth.basic(neo4jConfig.username, neo4jConfig.password)
);

const neo4jSchema = new Neo4jGraphQL({
  typeDefs: [JSONObjectDefinition, GraphNodeDefinition, PersonDefinition],
  resolvers: {
    JSONObject: JSONObjectResolver,
  },
  driver,
  config: {
    driverConfig: {
      database: neo4jConfig.database,
    },
  },
});

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => {
        const schema = await neo4jSchema.getSchema()
        return { schema }
      }
    })
  ],
  providers: [Neo4jSchemaProvider],
  exports: [Neo4jSchemaProvider]
})
export class Neo4jApiModule {}
