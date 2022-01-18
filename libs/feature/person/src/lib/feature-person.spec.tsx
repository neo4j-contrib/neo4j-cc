import { render } from '@testing-library/react';

import FeaturePerson from './feature-person';

describe('FeaturePerson', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturePerson />);
    expect(baseElement).toBeTruthy();
  });
});
