import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import GetRequest from './API/fetchPlaceholder';

import Home from './Home_Base/Home.js';
import { Navigate } from 'react-router-dom';
import BillingPage from './Home_Base/Bill';


import Footer from './Home_Base/Footer';
import Fitness from './Home_Base/Fitness';
import UnleashHell from './Hooks/UnleashHell';
import Header from './Home_Base/Header';

// Import your Stripe components
import { CheckoutForm, Return } from './Stripe/thing';      


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
        <Route path="/checkout" element={<CheckoutForm />} /> // New route for CheckoutForm
        <Route path="/return" element={<Return />} />         // New route for Return
        
       
      </Routes>

   
       {/* Footer */}
       <Footer />
    </div>
  );
}

export default App;
