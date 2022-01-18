import { render } from '@testing-library/react';

import DataAccessHooks from './data-access-hooks';

describe('DataAccessHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessHooks />);
    expect(baseElement).toBeTruthy();
  });
});
