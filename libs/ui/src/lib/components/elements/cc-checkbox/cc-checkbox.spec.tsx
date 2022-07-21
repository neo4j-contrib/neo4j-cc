import { render } from '@testing-library/react';

import CcCheckbox from './cc-checkbox';

describe('CcCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
