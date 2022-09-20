import { 
  GraphNodeDefinition,
  PersonDefinition 
} from '@neo4j-cc/graphql-types';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server';
import neo4j from 'neo4j-driver';

import { JSONObjectDefinition, JSONObjectResolver } from 'graphql-scalars';

const neo4jURL = process.env.NEO4J_URL || 'neo4j://localhost:7687';
const neo4jUsername = process.env.NEO4J_USERNAME || 'neo4j';
const neo4jPassword =
  process.env.NEO4J_PASSWORD || 'environment is missing NEO4J_PASSWORD';
const neo4jDatabase = process.env.NEO4J_DATABASE || 'neo4j';

const driver = neo4j.driver(
  neo4jURL,
  neo4j.auth.basic(neo4jUsername, neo4jPassword)
);

const neo4jSchema = new Neo4jGraphQL({
  typeDefs: [
    JSONObjectDefinition, 
    GraphNodeDefinition,
    PersonDefinition
  ],
  resolvers: {
    JSONObject: JSONObjectResolver,
  },
  driver,
  config: {
    driverConfig: {
      database: neo4jDatabase,
    },
  },
});

neo4jSchema.getSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
