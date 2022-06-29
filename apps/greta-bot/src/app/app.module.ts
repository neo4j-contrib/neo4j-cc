import { Module } from '@nestjs/common';

import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LoggerModule.forRoot({
    pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            messageFormat: '{levelLabel} - url:{req.url}'
          }
        }
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
