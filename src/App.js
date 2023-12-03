import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import GetRequest from './API/fetchPlaceholder';

import Home from './Home_Base/Home.js';
import { Navigate } from 'react-router-dom';
import Footer from './Home_Base/Footer';

import Fitness from './Home_Base/Fitness';
import UnleashHell from './Hooks/UnleashHell';
import Header from './Home_Base/Header';

import { CheckoutForm, Return } from './Stripe/thing';      


function App() {
  
  const location = useLocation();
  
  return (
    <div className="App">
      {/* Your common layout or navigation components */}
      
      <header>
      
        
        <GetRequest />
      
      </header>

      <Header />

    
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/UnleashHell" element={<Fitness />} />
        <Route path="/checkout" element={<CheckoutForm productId="product1"  />} /> 
        <Route path="/checkout" element={<CheckoutForm productId="product2"  />} /> 
        <Route path="/return" element={<Return />} />         // New route for Return
        
       
      </Routes>

   
       {/* Footer */}
       <Footer />
    </div>
  );
}

export default App;
