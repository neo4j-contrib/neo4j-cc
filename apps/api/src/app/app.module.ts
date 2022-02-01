
import { join } from 'path';

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Person } from '../person/person.entity';
import { PersonModule } from '../person/person.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'libs/data-api/src/schema.graphql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'cc.db',
      entities: [
        Person
      ],
      synchronize: true,
    }),
    PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}