import { render } from '@testing-library/react';

import LoadingMessage from './loading-message';

describe('LoadingMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingMessage />);
    expect(baseElement).toBeTruthy();
  });
});
