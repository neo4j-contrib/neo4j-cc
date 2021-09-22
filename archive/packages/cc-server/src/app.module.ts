import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { DataCatalogModule } from './data-catalog/data-catalog.module';
import { DataCatalog } from './data-catalog/data-catalog.entity';
import { DatasetModule } from './dataset/dataset.module';
import { Dataset } from './dataset/dataset.entity';
import { PersonModule } from './person/person.module';
import { Person } from './person/person.entity';
import { NotebookModule } from './notebook/notebook.module';
import { Notebook } from './notebook/notebook.entity';
import { OrganizationModule } from './organization/organization.module';
import { Organization } from './organization/organization.entity';
import { SoftwareApplicationModule } from './software-application/software-application.module';
import { SoftwareApplication } from './software-application/software-application.entity';
import { SoftwareSourceCodeModule } from './software-source-code/software-source-code.module';
import { SoftwareSourceCode } from './software-source-code/software-source-code.entity';
import { EventModule } from './event/event.module';
import { CourseModule } from './course/course.module';
import { BookModule } from './book/book.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { Event } from './event/event.entity';
import { Article } from './article/article.entity';
import { Book } from './book/book.entity';
import { Course } from './course/course.entity';
import { Comment } from './comment/comment.entity';
import { IncludedInDataCatalogModule } from './included-in-data-catalog/included-in-data-catalog.module';
import { IncludedInDataCatalog } from './included-in-data-catalog/included-in-data-catalog.entity';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'cc-admin', 'build'),
    }),
    ConfigModule.forRoot({
      envFilePath: join(__dirname,'..','.env'),
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'cc-dev',
      synchronize: true,
      entities: [
        User,
        DataCatalog,
        Dataset,
        Person,
        Notebook,
        Organization,
        SoftwareApplication,
        SoftwareSourceCode,
        Event,
        Article,
        Book,
        Course,
        Comment,
        IncludedInDataCatalog,
      ],
    }),
    UserModule,
    DataCatalogModule,
    DatasetModule,
    PersonModule,
    NotebookModule,
    OrganizationModule,
    SoftwareApplicationModule,
    SoftwareSourceCodeModule,
    EventModule,
    CourseModule,
    BookModule,
    ArticleModule,
    CommentModule,
    IncludedInDataCatalogModule,
    AuthzModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
