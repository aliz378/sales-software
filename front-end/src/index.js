import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const domain =  'dev-h39--0tx.us.auth0.com';
const clientId =  'NpZnSND7bRw61RFpwQPNrfom1ER4B8Ds';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======
reportWebVitals();

>>>>>>> 5b48f4e635532972ae54ec447127c2a0a44e51ef
