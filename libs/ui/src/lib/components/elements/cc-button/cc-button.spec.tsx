import { render } from '@testing-library/react';

import CcButton from './cc-button';

describe('CcButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcButton />);
    expect(baseElement).toBeTruthy();
  });
});
