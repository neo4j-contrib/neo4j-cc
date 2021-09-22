import React from "react";
import { useHistory } from "react-router-dom";
import { AppState, Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory:React.FC = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const history = useHistory();

  const onRedirectCallback = (appState:AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  if (domain === undefined || clientId === undefined) {
    throw new Error("Auth0 configuration is required but missing. Check the environment for REACT_APP_AUTH0_DOMAIN and/or REACT_APP_AUTH0_CLIENT_ID.");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
