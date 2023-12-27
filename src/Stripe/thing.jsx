import React, { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { Navigate, useLocation } from "react-router-dom";

// This is your test public API key.
const stripePromise = loadStripe("pk_live_51O7mnXEBiprZstxkBlUcDaR3NN4Qkmke4LtW5RVGRwKiRl6kdWLNdWf8sXrgVKcPJw9TXzPf052gmzRmxEQ6OfAU002CcUGNPs");




export const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [userEmail, setUserEmail] = useState(''); //new
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct; 


  useEffect(() => {
    document.body.classList.add('hide-header');
    return () => {
      document.body.classList.remove('hide-header');
    };
  }, []);

  

//Button click
  useEffect(() => {
    if (selectedProduct) {
      console.log("Selected Product:", selectedProduct);
      fetch("https://localhost:5000/api/create-checkout-session", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          priceId: selectedProduct.stripePriceId, 
          customer_email: userEmail  //new
        
        })
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    }
  }, [selectedProduct]);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
};
//Return Route after buying
export const Return = () => {
  const [status, setStatus] = useState(null);
  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        console.log("Session ID:", sessionId);
  
        if (sessionId) {
          const response = await fetch(`http://localhost:5000/session-status?session_id=${sessionId}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          if (data.status === 'open') {
            
          } else if (data.status === 'complete') {
            
            setStatus(data.status);
           
          }
        } else {
          setError("Session ID is missing");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.toString());
      }
    };
  
    fetchData();
  }, []);
  

  if (error) {
    return <div>Error: {error}</div>; // Display error
  }

  if (status === 'open') {
    return <Navigate to="/checkout" />;
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>We appreciate your business! </p>
        <p>You will receive an email and text message from the information you provided</p>
      </section>
    );
  }

  return null;
};