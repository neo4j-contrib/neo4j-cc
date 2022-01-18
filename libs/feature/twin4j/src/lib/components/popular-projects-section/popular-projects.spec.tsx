import { render } from '@testing-library/react';

import PopularProjects from './popular-projects';

describe('PopularProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopularProjects />);
    expect(baseElement).toBeTruthy();
  });
});
