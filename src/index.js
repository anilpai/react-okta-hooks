import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './AuthProvider';
import { domain, clientId } from './config';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const config = {
  history,
  issuer: `https://${domain}/`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  clientId,
  postLogoutRedirectUri: "http://localhost:8080/"
};


ReactDOM.render(
  <AuthProvider config={config}>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
);
