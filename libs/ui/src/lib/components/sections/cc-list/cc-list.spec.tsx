import { render } from '@testing-library/react';

import CcList from './cc-list';

describe('CcList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcList />);
    expect(baseElement).toBeTruthy();
  });
});
