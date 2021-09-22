import { Module } from '@nestjs/common';
import { DatasetService } from './dataset.service';
import { DatasetResolver } from './dataset.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dataset } from './dataset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dataset])],
  providers: [DatasetResolver, DatasetService],
})
export class DatasetModule {}
