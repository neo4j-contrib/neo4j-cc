import { render } from '@testing-library/react';

import CcSiteSidebar from './cc-site-sidebar';

describe('CcSiteSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcSiteSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
