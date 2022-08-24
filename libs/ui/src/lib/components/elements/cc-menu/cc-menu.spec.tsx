import { render } from '@testing-library/react';

import CcMenu from './cc-menu';

describe('CcMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcMenu />);
    expect(baseElement).toBeTruthy();
  });
});
