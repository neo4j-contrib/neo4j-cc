import { render } from '@testing-library/react';

import CcNavIcon from './cc-nav-icon';

describe('CcNavIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcNavIcon />);
    expect(baseElement).toBeTruthy();
  });
});
