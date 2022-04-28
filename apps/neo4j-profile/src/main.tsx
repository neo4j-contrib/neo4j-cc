import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Auth0Provider
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      domain={process.env.NX_AUTH0_DOMAIN!}
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clientId={process.env.NX_AUTH0_CLIENTID!}
      redirectUri={window.location.origin}
      scope={'read:current_user'}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
