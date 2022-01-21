import { render } from '@testing-library/react';

import AnnounceKitSection from './announce-kit-section';

describe('AnnounceKitSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnnounceKitSection />);
    expect(baseElement).toBeTruthy();
  });
});
