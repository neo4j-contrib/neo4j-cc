import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataCatalogService } from './data-catalog.service';
import { DataCatalogResolver } from './data-catalog.resolver';
import { DataCatalog } from './data-catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataCatalog])],
  providers: [DataCatalogResolver, DataCatalogService],
})
export class DataCatalogModule {}
