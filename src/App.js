import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import GetRequest from './API/fetchPlaceholder';

import Home from './Home_Base/Home.js';
import { Navigate } from 'react-router-dom';
import BillingPage from './Hooks/billingpage';


import Footer from './Home_Base/Footer';
import Fitness from './Home_Base/Fitness';
import UnleashHell from './Hooks/UnleashHell';

import Header from './Home_Base/Header';


function App() {
  
  const location = useLocation();
  const renderHeader = location.pathname !== '/signup';
  
  
  return (
    <div className="App">
      {/* Your common layout or navigation components */}
      
      <header>
      
        
        <GetRequest />
      
      </header>

      <Header />

    
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<BillingPage />} />
        <Route path="/UnleashHell" element={<Fitness />} />
        
       
      </Routes>

   
       {/* Footer */}
       <Footer />
    </div>
  );
}

export default App;
