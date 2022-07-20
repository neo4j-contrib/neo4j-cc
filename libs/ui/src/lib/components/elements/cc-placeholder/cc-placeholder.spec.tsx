import { render } from '@testing-library/react';

import CcPlaceholder from './cc-placeholder';

describe('CcPlaceholder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcPlaceholder />);
    expect(baseElement).toBeTruthy();
  });
});
