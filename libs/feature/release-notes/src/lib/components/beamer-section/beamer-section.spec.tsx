import { render } from '@testing-library/react';

import BeamerSection from './beamer-section';

describe('BeamerSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BeamerSection />);
    expect(baseElement).toBeTruthy();
  });
});
