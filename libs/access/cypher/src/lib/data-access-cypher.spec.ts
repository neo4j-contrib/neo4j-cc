import { dataAccessCypher } from './data-access-cypher';

describe('dataAccessCypher', () => {
  it('should work', () => {
    expect(dataAccessCypher()).toEqual('data-access-cypher');
  });
});
