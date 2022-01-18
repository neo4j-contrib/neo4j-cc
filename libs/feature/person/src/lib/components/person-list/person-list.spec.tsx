import { render } from '@testing-library/react';

import PersonList from './person-list';

describe('PersonList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonList />);
    expect(baseElement).toBeTruthy();
  });
});
