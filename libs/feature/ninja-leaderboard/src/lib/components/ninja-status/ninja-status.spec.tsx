import { render } from '@testing-library/react';

import NinjaStatus from './ninja-status';

describe('NinjaStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NinjaStatus />);
    expect(baseElement).toBeTruthy();
  });
});
