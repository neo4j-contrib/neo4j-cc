import { render } from '@testing-library/react';

import CcStats from './cc-stats';

describe('CcStats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcStats />);
    expect(baseElement).toBeTruthy();
  });
});
