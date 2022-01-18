import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareSourceCodeService } from './software-source-code.service';

describe('SoftwareSourceCodeService', () => {
  let service: SoftwareSourceCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftwareSourceCodeService],
    }).compile();

    service = module.get<SoftwareSourceCodeService>(SoftwareSourceCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
