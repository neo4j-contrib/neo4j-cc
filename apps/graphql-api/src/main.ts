import { ActorTypeDef, MovieTypeDef } from '@neo4j-cc/graphql-types';
import { Neo4jGraphQL } from '@neo4j/graphql'
import { ApolloServer } from 'apollo-server'
import neo4j from 'neo4j-driver'

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "marwhompa")
);

const neo4jSchema = new Neo4jGraphQL({ 
  typeDefs:[
    ActorTypeDef,
    MovieTypeDef
  ], 
  driver,
  config: {
    driverConfig: {
        database: "graphql-types",
    }
},
 });

neo4jSchema.getSchema().then((schema) => {
  const server = new ApolloServer({
      schema,
  });

  server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
  });
})