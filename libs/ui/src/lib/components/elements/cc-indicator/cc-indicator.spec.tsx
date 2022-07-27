import { render } from '@testing-library/react';

import CcIndicator from './cc-indicator';

describe('CcIndicator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcIndicator />);
    expect(baseElement).toBeTruthy();
  });
});
