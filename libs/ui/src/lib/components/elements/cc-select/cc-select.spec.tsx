import { render } from '@testing-library/react';

import CcSelect from './cc-select';

describe('CcSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcSelect />);
    expect(baseElement).toBeTruthy();
  });
});
