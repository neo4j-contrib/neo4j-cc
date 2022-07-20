import { render } from '@testing-library/react';

import CcAvatar from './cc-avatar';

describe('CcAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
