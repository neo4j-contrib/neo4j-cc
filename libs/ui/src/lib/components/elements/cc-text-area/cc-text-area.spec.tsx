import { render } from '@testing-library/react';

import CcTextArea from './cc-text-area';

describe('CcTextArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcTextArea />);
    expect(baseElement).toBeTruthy();
  });
});
