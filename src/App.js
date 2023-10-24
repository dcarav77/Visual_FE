//set up routing and render different components

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetRequest from './API/fetchPlaceholder';

import Home from './Home_Base/Home.js';
import { Navigate } from 'react-router-dom';
import BillingPage from './Routes/billingpage';



function App() {
  return (
    <div className="App">
      {/* Your common layout or navigation components */}
      
      <header>
        
        <GetRequest />
      
      </header>

      {/* Define your routes using Routes and Route components */}
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<BillingPage />} />
        
       
      </Routes>

   
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
