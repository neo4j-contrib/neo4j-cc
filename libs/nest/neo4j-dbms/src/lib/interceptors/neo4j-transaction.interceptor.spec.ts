import { Neo4jTransactionInterceptor } from './neo4j-transaction.interceptor';

describe('Neo4jTransactionInterceptor', () => {
  it('should be defined', () => {
    expect(new Neo4jTransactionInterceptor()).toBeDefined();
  });
});
