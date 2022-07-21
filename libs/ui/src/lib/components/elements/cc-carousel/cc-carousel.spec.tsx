import { render } from '@testing-library/react';

import CcCarousel from './cc-carousel';

describe('CcCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
