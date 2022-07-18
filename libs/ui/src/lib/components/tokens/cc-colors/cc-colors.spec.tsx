import { render } from '@testing-library/react';

import CcColors from './cc-colors';

describe('CcColors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcColors />);
    expect(baseElement).toBeTruthy();
  });
});
