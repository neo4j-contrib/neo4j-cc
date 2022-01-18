import { render } from '@testing-library/react';

import {ItemList} from './item-list';

describe('ItemList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemList items={[{i:1},{i:2},{i:3}]} renderItem={({value}) => (<span>{value.i}</span>)} />);
    expect(baseElement).toBeTruthy();
  });
});
