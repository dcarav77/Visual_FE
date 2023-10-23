//set up routing and render different components

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetRequest from './API/fetchPlaceholder';
import SignUp from './React_Components/routes/SignUp'

function App() {
  return (
    <div className="App">
      {/* Your common layout or navigation components */}
      
      <header>
        
        <GetRequest />
      
      </header>

      {/* Define your routes using Routes and Route components */}
      <Routes>
       
        <Route path="/signup" element={<SignUp />} />
       
      </Routes>

   
      <footer>
        <p>&copy; 2023 Fitness App</p>
      </footer>
    </div>
  );
}

export default App;
