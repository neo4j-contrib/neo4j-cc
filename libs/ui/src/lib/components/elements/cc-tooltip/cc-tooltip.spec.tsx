import { render } from '@testing-library/react';

import CcTooltip from './cc-tooltip';

describe('CcTooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcTooltip />);
    expect(baseElement).toBeTruthy();
  });
});
