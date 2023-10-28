import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function BillingPage() {

  const navigate = useNavigate();

  useEffect(() => {
    // Add a CSS class to hide the header when the component mounts
    document.body.classList.add('hide-header');
    
    // Remove the CSS class to show the header when the component unmounts
    return () => {
      document.body.classList.remove('hide-header');
    };
  }, []);

  return (
    <iframe
      src="http://localhost:4000/static/Billing/billing.html"
      title="Billing Page"
      width="100%"
      height="1000"
      frameBorder="0"
    />
  );
}

export default BillingPage;
