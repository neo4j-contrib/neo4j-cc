import { render } from '@testing-library/react';

import {Neo4jLogo} from './icons';

describe('Icons', () => {
  it('should render Neo4jLogo successfully', () => {
    const { baseElement } = render(<Neo4jLogo />);
    expect(baseElement).toBeTruthy();
  });
});
