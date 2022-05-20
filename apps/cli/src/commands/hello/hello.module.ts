import { Module } from '@nestjs/common';
import { HelloRunner } from './hello.command';

@Module({
  providers: [HelloRunner]
})
export class HelloModule {}
