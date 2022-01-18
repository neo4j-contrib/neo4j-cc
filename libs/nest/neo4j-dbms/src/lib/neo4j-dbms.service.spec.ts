import { Test, TestingModule } from '@nestjs/testing';
import { Neo4jDbmsService } from './neo4j-dbms.service';
import { NestNeo4jDbmsModule } from './nest-neo4j-dbms.module';

describe('Neo4jDbmsService', () => {
  let service: Neo4jDbmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        NestNeo4jDbmsModule.forRoot({
          scheme: 'neo4j',
          host: 'localhost',
          port: 7687,
          username: 'neo4j',
          password: 'marwhompa'
        })
      ],
    }).compile();

    service = module.get<Neo4jDbmsService>(Neo4jDbmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
