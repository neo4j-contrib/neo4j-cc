import { render } from '@testing-library/react';

import CcFillPattern from './cc-fill-pattern';

describe('CcFillPattern', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcFillPattern />);
    expect(baseElement).toBeTruthy();
  });
});
