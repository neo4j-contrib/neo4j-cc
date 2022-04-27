
import { join } from 'path';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { TodosModule } from '../todos/todos.module';
import { Todo } from '../todos/entities/todo.entity';
import { AuthzModule } from '../authz/authz.module';
import { HttpLoggerMiddleware } from '../common/http-logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'cc.db',
      entities: [
        Todo
      ],
      synchronize: true,
    }),
    AuthzModule,
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
