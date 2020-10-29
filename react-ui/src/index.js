import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './Global/User';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);