import { render } from '@testing-library/react';

import CcToggle from './cc-toggle';

describe('CcToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcToggle />);
    expect(baseElement).toBeTruthy();
  });
});
