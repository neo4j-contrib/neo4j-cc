import { dataAccessGithub } from './data-access-github';

describe('dataAccessGithub', () => {
  it('should work', () => {
    expect(dataAccessGithub()).toEqual('data-access-github');
  });
});
