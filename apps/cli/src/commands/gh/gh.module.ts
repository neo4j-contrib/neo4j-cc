import { Module } from '@nestjs/common';
import { GithubRunner } from './gh.command';

@Module({
  providers: [GithubRunner]
})
export class GhModule {}
