import { render } from '@testing-library/react';

import CcCard from './cc-card';

describe('CcCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcCard />);
    expect(baseElement).toBeTruthy();
  });
});
