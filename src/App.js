//set up routing and render different components

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetRequest from './API/fetchPlaceholder';
import SignUp from './React_Components/routes/Sign_Up/SignUp';
import Home from './React_Components/Home_Base/Home.js';


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
        <Route path="/signup" element={<SignUp />} />
       
      </Routes>

   
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
