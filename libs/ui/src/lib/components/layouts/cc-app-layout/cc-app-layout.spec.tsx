import { render } from '@testing-library/react';

import CcAppLayout from './cc-app-layout';

describe('CcAppLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcAppLayout />);
    expect(baseElement).toBeTruthy();
  });
});
