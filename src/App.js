import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Home from './Home_Base/Home.js';

import { Navigate } from 'react-router-dom';
import Footer from './Home_Base/Footer';
import Fitness from './Home_Base/Fitness';

import UnleashHell from './Hooks/UnleashHell';
import Header from './Home_Base/Header';
import { CheckoutForm, Return } from './Stripe/3thing.jsx'; 
import PrivacyPolicy from './Home_Base/policy.js';



function App() {
  
  const location = useLocation();
  
  return (
    <div className="App">
      {/* Your common layout or navigation components */}
      
      <header>
      
      
      </header>

      <Header />

    
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/UnleashHell" element={<Fitness />} />
        <Route path="/checkout" element={<CheckoutForm />} /> 
        <Route path="/return" element={<Return />} />  
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />     
        
       
      </Routes>

   
       {/* Footer */}
       <Footer />
    </div>
  );
}

export default App;
