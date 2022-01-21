import { render } from '@testing-library/react';

import FeatureReleaseNotes from './feature-release-notes';

describe('FeatureReleaseNotes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureReleaseNotes />);
    expect(baseElement).toBeTruthy();
  });
});
