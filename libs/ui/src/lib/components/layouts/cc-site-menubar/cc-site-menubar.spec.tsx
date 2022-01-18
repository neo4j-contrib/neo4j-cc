import { render } from '@testing-library/react';

import CcSiteMenubar from './cc-site-menubar';

describe('CcSiteMenubar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcSiteMenubar />);
    expect(baseElement).toBeTruthy();
  });
});
