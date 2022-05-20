import { Module } from '@nestjs/common';
import { EchoModule } from '../commands/echo/echo.module';
import { GhModule } from '../commands/gh/gh.module';
import { HelloModule } from '../commands/hello/hello.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HelloModule, EchoModule, GhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
