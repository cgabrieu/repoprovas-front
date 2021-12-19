import './assets/styles/reset.css';
import './assets/styles/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AlertsProvider from './contexts/AlertContext';

ReactDOM.render(
  <AlertsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AlertsProvider>,
  document.getElementById('root')
);
