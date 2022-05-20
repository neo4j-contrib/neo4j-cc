import { Module } from '@nestjs/common';
import { EchoRunner } from './echo.command';

@Module({
  providers: [EchoRunner]
})
export class EchoModule {}
