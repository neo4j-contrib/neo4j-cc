import { render } from '@testing-library/react';

import CcNavigation from './cc-navigation';

describe('CcNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
