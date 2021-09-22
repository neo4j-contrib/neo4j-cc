import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareSourceCodeResolver } from './software-source-code.resolver';
import { SoftwareSourceCodeService } from './software-source-code.service';

describe('SoftwareSourceCodeResolver', () => {
  let resolver: SoftwareSourceCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareSourceCodeResolver, SoftwareSourceCodeService],
    }).compile();

    resolver = module.get<SoftwareSourceCodeResolver>(SoftwareSourceCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
