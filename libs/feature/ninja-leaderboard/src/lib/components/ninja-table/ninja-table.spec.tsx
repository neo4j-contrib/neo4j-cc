import { render } from '@testing-library/react';

import NinjaTable from './ninja-table';

describe('NinjaTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NinjaTable />);
    expect(baseElement).toBeTruthy();
  });
});
