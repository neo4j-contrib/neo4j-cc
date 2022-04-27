import { render } from '@testing-library/react';

import CcProfileItem from './cc-profile-item';

describe('CcProfileItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcProfileItem />);
    expect(baseElement).toBeTruthy();
  });
});
