import { render } from '@testing-library/react';

import TodosPage from './todos-page';

describe('TodosPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodosPage />);
    expect(baseElement).toBeTruthy();
  });
});
