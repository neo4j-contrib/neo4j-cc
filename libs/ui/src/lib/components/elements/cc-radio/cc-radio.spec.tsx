import { render } from '@testing-library/react';

import CcRadio from './cc-radio';

describe('CcRadio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcRadio />);
    expect(baseElement).toBeTruthy();
  });
});
