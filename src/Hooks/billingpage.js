import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BillingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current location is the /signup route
    if (location.pathname === '/signup') {
      // Add a CSS class to hide the header
      document.body.classList.add('hide-header');
    }

    // Remove the CSS class to show the header when the component unmounts
    return () => {
      if (location.pathname === '/signup') {
        document.body.classList.remove('hide-header');
      }
    };
  }, [location.pathname]);

  return (
    <iframe
      src="/Users/dustin_caravaglia/Documents/repo/Visual_FE/src/Home_Base/Bill.js"
      title="Billing Page"
      width="100%"
      height="1000"
      frameBorder="0"
    />
  );
}

export default BillingPage;
