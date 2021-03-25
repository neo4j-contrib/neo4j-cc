import { Module } from '@nestjs/common';
import { IncludedInDataCatalogService } from './included-in-data-catalog.service';
import { IncludedInDataCatalogResolver } from './included-in-data-catalog.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncludedInDataCatalog } from './included-in-data-catalog.entity';
import { DataCatalog } from 'src/data-catalog/data-catalog.entity';
import { Dataset } from 'src/dataset/dataset.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncludedInDataCatalog, Dataset, DataCatalog]),
  ],
  providers: [IncludedInDataCatalogResolver, IncludedInDataCatalogService],
})
export class IncludedInDataCatalogModule {}
