import { render } from '@testing-library/react';

import RecordTable from './record-table';

describe('RecordTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecordTable />);
    expect(baseElement).toBeTruthy();
  });
});
