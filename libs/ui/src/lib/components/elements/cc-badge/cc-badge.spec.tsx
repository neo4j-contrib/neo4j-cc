import { render } from '@testing-library/react';

import CcBadge from './cc-badge';

describe('CcBadge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcBadge />);
    expect(baseElement).toBeTruthy();
  });
});
