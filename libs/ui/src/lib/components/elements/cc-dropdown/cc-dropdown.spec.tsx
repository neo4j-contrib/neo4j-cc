import { render } from '@testing-library/react';

import CcDropdown from './cc-dropdown';

describe('CcDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
