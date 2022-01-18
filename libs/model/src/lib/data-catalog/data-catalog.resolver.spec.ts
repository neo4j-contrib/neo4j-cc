import { Test, TestingModule } from '@nestjs/testing';
import { DataCatalogResolver } from './data-catalog.resolver';
import { DataCatalogService } from './data-catalog.service';

describe('DataCatalogResolver', () => {
  let resolver: DataCatalogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataCatalogResolver, DataCatalogService],
    }).compile();

    resolver = module.get<DataCatalogResolver>(DataCatalogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
