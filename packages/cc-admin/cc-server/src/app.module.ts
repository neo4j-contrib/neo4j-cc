import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { DataCatalogModule } from './data-catalog/data-catalog.module';
import { DataCatalog } from './data-catalog/data-catalog.entity';
import { DatasetModule } from './dataset/dataset.module';
import { Dataset } from './dataset/dataset.entity';
import { PersonModule } from './person/person.module';
import { Person } from './person/person.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'cc-dev',
      synchronize: true,
      entities: [User, DataCatalog, Dataset, Person],
    }),
    UserModule,
    DataCatalogModule,
    DatasetModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
