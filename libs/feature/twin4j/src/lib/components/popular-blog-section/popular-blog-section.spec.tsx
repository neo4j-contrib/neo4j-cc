import { render } from '@testing-library/react';

import PopularBlogSection from './popular-blog-section';

describe('PopularBlogSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopularBlogSection />);
    expect(baseElement).toBeTruthy();
  });
});
