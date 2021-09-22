import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareApplicationService } from './software-application.service';

describe('SoftwareApplicationService', () => {
  let service: SoftwareApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareApplicationService],
    }).compile();

    service = module.get<SoftwareApplicationService>(SoftwareApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
