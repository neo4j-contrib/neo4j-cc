import { render } from '@testing-library/react';

import FeatureTwin4j from './feature-twin4j';

describe('FeatureTwin4j', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureTwin4j />);
    expect(baseElement).toBeTruthy();
  });
});
