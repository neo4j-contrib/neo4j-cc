import { render } from '@testing-library/react';

import CcRange from './cc-range';

describe('CcRange', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcRange />);
    expect(baseElement).toBeTruthy();
  });
});
