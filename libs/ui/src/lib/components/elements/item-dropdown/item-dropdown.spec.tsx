import { render } from '@testing-library/react';

import ItemDropdown from './item-dropdown';

describe('ItemSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemDropdown items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
