import { render } from '@testing-library/react';

import CcModal from './cc-modal';

describe('CcModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcModal />);
    expect(baseElement).toBeTruthy();
  });
});
