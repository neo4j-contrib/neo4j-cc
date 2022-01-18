import { render } from '@testing-library/react';

import DataAccessPerson from './data-access-person';

describe('DataAccessPerson', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessPerson />);
    expect(baseElement).toBeTruthy();
  });
});
