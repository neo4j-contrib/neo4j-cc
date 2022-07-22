import { render } from '@testing-library/react';

import {CcSelect} from './cc-select';

describe('CcSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CcSelect>
        <CcSelect.Option value={undefined}>no value</CcSelect.Option>
        <CcSelect.Option value={'definitely-valued'}>has value</CcSelect.Option>
      </CcSelect>
    );
    expect(baseElement).toBeTruthy();
  });
});
