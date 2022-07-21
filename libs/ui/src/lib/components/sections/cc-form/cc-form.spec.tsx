import { render } from '@testing-library/react';

import CcForm from './cc-form';

describe('CcForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcForm />);
    expect(baseElement).toBeTruthy();
  });
});
