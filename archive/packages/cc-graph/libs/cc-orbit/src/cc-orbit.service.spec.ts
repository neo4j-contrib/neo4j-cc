import { Test, TestingModule } from '@nestjs/testing';
import { CcOrbitService } from './cc-orbit.service';

describe('CcOrbitService', () => {
  let service: CcOrbitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CcOrbitService],
    }).compile();

    service = module.get<CcOrbitService>(CcOrbitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
