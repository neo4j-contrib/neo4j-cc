import { render } from '@testing-library/react';

import ConnectPage from './connect-page';

describe('ConnectPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConnectPage />);
    expect(baseElement).toBeTruthy();
  });
});
