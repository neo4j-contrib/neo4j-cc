import { render } from '@testing-library/react';

import MonthSelector from './month-selector';

describe('MonthSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonthSelector />);
    expect(baseElement).toBeTruthy();
  });
});
