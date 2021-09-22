import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './tailwind.css';

import { createClient, Provider } from 'urql';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
const client = createClient({
  url: 'http://localhost:5000/graphql',
});


ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
