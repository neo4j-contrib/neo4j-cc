import { render } from '@testing-library/react';

import CcPanel from './cc-panel';

describe('CcPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcPanel />);
    expect(baseElement).toBeTruthy();
  });
});
