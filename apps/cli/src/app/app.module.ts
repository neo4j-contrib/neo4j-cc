import { Module } from '@nestjs/common';
import { EchoModule } from '../commands/echo/echo.module';
import { HelloModule } from '../commands/hello/hello.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HelloModule, EchoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
