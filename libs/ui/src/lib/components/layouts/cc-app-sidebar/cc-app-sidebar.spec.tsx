import { render } from '@testing-library/react';

import CcAppSidebar from './cc-app-sidebar';

describe('CcSiteSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcAppSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
