import { Module } from '@nestjs/common';


import { Neo4jModule, Neo4jConfig } from '@nhogs/nestjs-neo4j'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NodesModule } from '../resources/nodes/nodes.module'
import { CatsModule } from '../resources/cats/cats.module'
import { Neo4jApiModule } from '../neo4j-api/neo4j-api.module';

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


@Module({
  imports: [
    Neo4jModule.forRoot(neo4jConfig),
    Neo4jApiModule,
    NodesModule,
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
