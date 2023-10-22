import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import MainRoutes from './React_Components/routes/main_route';

const root = document.getElementById('root');
const rootElement = createRoot(root); 

rootElement.render(
  <React.StrictMode>
    <App />
    <MainRoutes />
  </React.StrictMode>
);
