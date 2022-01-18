import { render } from '@testing-library/react';

import PersonForm from './person-form';

describe('PersonForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonForm />);
    expect(baseElement).toBeTruthy();
  });
});
