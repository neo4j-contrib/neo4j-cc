import { render } from '@testing-library/react';

import CcWorkspace from './cc-workspace';

describe('CcWorkspace', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcWorkspace />);
    expect(baseElement).toBeTruthy();
  });
});
