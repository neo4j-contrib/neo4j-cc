import { render } from '@testing-library/react';

import CcAlert from './cc-alert';

describe('CcAlert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcAlert />);
    expect(baseElement).toBeTruthy();
  });
});
