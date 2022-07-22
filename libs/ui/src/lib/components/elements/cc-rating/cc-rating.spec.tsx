import { render } from '@testing-library/react';

import CcRating from './cc-rating';

describe('CcRating', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcRating />);
    expect(baseElement).toBeTruthy();
  });
});
