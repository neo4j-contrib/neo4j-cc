import { render } from '@testing-library/react';

import {ItemTabNav} from './item-tab-nav';

describe('ItemTabNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemTabNav items={[]}/>);
    expect(baseElement).toBeTruthy();
  });
});
