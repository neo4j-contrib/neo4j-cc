import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationResolver } from './organization.resolver';
import { OrganizationService } from './organization.service';

describe('OrganizationResolver', () => {
  let resolver: OrganizationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationResolver, OrganizationService],
    }).compile();

    resolver = module.get<OrganizationResolver>(OrganizationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
