// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigate() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default Navigate;
