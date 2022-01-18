import { render } from '@testing-library/react';

import ItemViews from './item-views';

describe('ItemViews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemViews />);
    expect(baseElement).toBeTruthy();
  });
});
