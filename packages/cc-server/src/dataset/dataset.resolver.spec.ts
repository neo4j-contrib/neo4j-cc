import { Test, TestingModule } from '@nestjs/testing';
import { DatasetResolver } from './dataset.resolver';
import { DatasetService } from './dataset.service';

describe('DatasetResolver', () => {
  let resolver: DatasetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatasetResolver, DatasetService],
    }).compile();

    resolver = module.get<DatasetResolver>(DatasetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
