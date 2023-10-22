// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../../App';
import SignUp from './SignUp'; // Create a SignUp component for the sign-up page

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={SignUp} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
