import { render } from '@testing-library/react';

import CcInput from './cc-input';

describe('CcInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcInput />);
    expect(baseElement).toBeTruthy();
  });
});
