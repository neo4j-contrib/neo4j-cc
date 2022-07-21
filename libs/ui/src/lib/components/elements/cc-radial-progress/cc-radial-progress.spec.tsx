import { render } from '@testing-library/react';

import CcRadialProgress from './cc-radial-progress';

describe('CcRadialProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcRadialProgress />);
    expect(baseElement).toBeTruthy();
  });
});
