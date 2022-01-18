import { render } from '@testing-library/react';

import CommunityNavigation from './community-navigation';

describe('CommunityNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommunityNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
