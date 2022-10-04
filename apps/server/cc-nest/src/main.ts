/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  const port = process.env.PORT || 3333;

  const config = new DocumentBuilder()
  .setTitle('Neo4j-CC')
  .setDescription('The Neo4j Common Collection API')
  .setVersion('1.0')
  .addTag('graph')
  .addTag('domain')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup(globalPrefix, app, document);


  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
