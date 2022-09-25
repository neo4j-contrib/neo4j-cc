import { Test, TestingModule } from '@nestjs/testing';
import { Neo4jSchemaProvider } from './neo4j-schema.provider';

describe('Neo4jSchemaProvider', () => {
  let provider: Neo4jSchemaProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Neo4jSchemaProvider],
    }).compile();

    provider = module.get<Neo4jSchemaProvider>(Neo4jSchemaProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
