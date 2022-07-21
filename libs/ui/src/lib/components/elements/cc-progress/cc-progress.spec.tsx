import { render } from '@testing-library/react';

import CcProgress from './cc-progress';

describe('CcProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcProgress />);
    expect(baseElement).toBeTruthy();
  });
});
