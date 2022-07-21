import { render } from '@testing-library/react';

import CcKbd from './cc-kbd';

describe('CcKbd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcKbd />);
    expect(baseElement).toBeTruthy();
  });
});
