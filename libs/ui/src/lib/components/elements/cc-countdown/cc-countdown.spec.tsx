import { render } from '@testing-library/react';

import CcCountdown from './cc-countdown';

describe('CcCountdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcCountdown />);
    expect(baseElement).toBeTruthy();
  });
});
