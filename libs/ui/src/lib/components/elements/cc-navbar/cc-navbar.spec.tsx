import { render } from '@testing-library/react';

import CcNavbar from './cc-navbar';

describe('CcNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
