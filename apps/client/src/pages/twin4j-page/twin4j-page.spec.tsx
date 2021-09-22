import { render } from '@testing-library/react';

import Twin4jPage from './twin4j-page';

describe('Twin4jPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Twin4jPage />);
    expect(baseElement).toBeTruthy();
  });
});
