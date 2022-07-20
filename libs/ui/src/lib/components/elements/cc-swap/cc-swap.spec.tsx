import { render } from '@testing-library/react';

import CcSwap from './cc-swap';

describe('CcSwap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcSwap />);
    expect(baseElement).toBeTruthy();
  });
});
