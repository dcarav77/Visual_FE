import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import Navigate from './React_Components/Navigate';
import { createRoot } from 'react-dom/client'; 

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <Router>
      <App />
      {/*  <MainRoutes /> */}
      <Navigate />
    </Router>
  </React.StrictMode>
);
