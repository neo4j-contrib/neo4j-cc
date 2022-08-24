import { render } from '@testing-library/react';

import BlankPage from './blank-page';

describe('BlankPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlankPage />);
    expect(baseElement).toBeTruthy();
  });
});
