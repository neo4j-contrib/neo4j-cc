import { render } from '@testing-library/react';

import FeatureNinjaLeaderboard from './feature-ninja-leaderboard';

describe('FeatureNinjaLeaderboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureNinjaLeaderboard />);
    expect(baseElement).toBeTruthy();
  });
});
