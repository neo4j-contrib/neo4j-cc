import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareApplicationResolver } from './software-application.resolver';
import { SoftwareApplicationService } from './software-application.service';

describe('SoftwareApplicationResolver', () => {
  let resolver: SoftwareApplicationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareApplicationResolver, SoftwareApplicationService],
    }).compile();

    resolver = module.get<SoftwareApplicationResolver>(SoftwareApplicationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
