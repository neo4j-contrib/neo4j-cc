import { render } from '@testing-library/react';

import CcPage from './cc-page';

describe('CcPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcPage />);
    expect(baseElement).toBeTruthy();
  });
});
