import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
  
    return (
    <header className="header">
      <nav className="nav">
      <section className="cta">
          <button className="cta-button" onClick={() => navigate('/checkout')}> Start My Transformation Now </button>
        </section>
      </nav>
    </header>
  );
}

export default Header;


        
      