import { Test, TestingModule } from '@nestjs/testing';
import { NotebookResolver } from './notebook.resolver';
import { NotebookService } from './notebook.service';

describe('NotebookResolver', () => {
  let resolver: NotebookResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotebookResolver, NotebookService],
    }).compile();

    resolver = module.get<NotebookResolver>(NotebookResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
