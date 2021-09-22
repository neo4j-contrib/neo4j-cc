import { Test, TestingModule } from '@nestjs/testing';
import { IncludedInDataCatalogResolver } from './included-in-data-catalog.resolver';
import { IncludedInDataCatalogService } from './included-in-data-catalog.service';

describe('IncludedInDataCatalogResolver', () => {
  let resolver: IncludedInDataCatalogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncludedInDataCatalogResolver, IncludedInDataCatalogService],
    }).compile();

    resolver = module.get<IncludedInDataCatalogResolver>(IncludedInDataCatalogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
