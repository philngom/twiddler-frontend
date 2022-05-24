import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext.js';
import { TweedProvider } from './context/TweedProvider.js';

render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <TweedProvider>
          <App />
        </TweedProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
