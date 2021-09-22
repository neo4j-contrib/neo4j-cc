import { render } from '@testing-library/react';

import CcSiteLayout from './cc-site-layout';

describe('CcSiteLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcSiteLayout />);
    expect(baseElement).toBeTruthy();
  });
});
