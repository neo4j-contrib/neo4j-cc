import { dataAccessFs } from './data-access-fs';

describe('dataAccessFs', () => {
  it('should work', () => {
    expect(dataAccessFs()).toEqual('data-access-fs');
  });
});
