import { render } from '@testing-library/react';

import CcSuperLayout from './cc-super-layout';

describe('CcSuperLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcSuperLayout />);
    expect(baseElement).toBeTruthy();
  });
});
