import { Test, TestingModule } from '@nestjs/testing';
import { IncludedInDataCatalogService } from './included-in-data-catalog.service';

describe('IncludedInDataCatalogService', () => {
  let service: IncludedInDataCatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncludedInDataCatalogService],
    }).compile();

    service = module.get<IncludedInDataCatalogService>(IncludedInDataCatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
