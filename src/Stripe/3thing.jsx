import React, { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { Navigate, useLocation } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// Component for handling the checkout process.
export const CheckoutForm = () => {
  
  const [clientSecret, setClientSecret] = useState('');
  const [userEmail, setUserEmail] = useState(''); 
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct; 


  useEffect(() => {

    console.log('Current Environment:', process.env.NODE_ENV);
    console.log('API URL:', process.env.REACT_APP_API_URL);


    document.body.classList.add('hide-header');
    return () => {
      document.body.classList.remove('hide-header');
    };
  }, []);

 // Effect to create a Stripe checkout session when a product is selected.
  useEffect(() => {
    if (selectedProduct) {
      console.log("Selected Product:", selectedProduct);
      const url = `${process.env.REACT_APP_API_URL}/api/create-checkout-session`;
      //const url = `${process.env.REACT_APP_API_URL}/create-checkout-session`;
      fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          priceId: selectedProduct.stripePriceId, 
          customer_email: userEmail  
        
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

//Component to handle the return from the Stripe checkout process.
export const Return = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {

        console.log("Render check, Status:", status, "Error:", error);

      const fetchData = async () => {
        // Extract the session ID from the URL.
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        console.log("Session ID:", sessionId);
  
        if (!sessionId) {
          console.log("Session ID is missing");
          setError("Session ID is missing");
          return;
        }
  
        try {
          // Request to check the session status from the server.
          //const url = `${process.env.REACT_APP_API_URL}/session-status?session_id=${sessionId}`;
          const url = `${process.env.REACT_APP_API_URL}/api/session-status?session_id=${sessionId}`;
          const response = await fetch(url);
          
          console.log('Full response from server:', response);
          
          if (!response.ok) {
            console.error(`Server responded with status: ${response.status}`);
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          console.log("Session data:", data);
  
          if (data.status === 'complete') {
            console.log("Setting status to complete");
            setStatus('complete');
          } else {
            console.log("Session status is not complete:", data.status);
            setStatus('open'); // Or handle other statuses differently
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error.toString());
        }
      };
  
      fetchData();
    }, []);
  
    // Render based on the state.
    if (error) {
      console.log("Rendering error message");
      return <div>Error: {error}</div>;
    }
  
    if (status === 'complete') {
      console.log("Rendering success message");
      return (
        <section id="success">
          <p>We appreciate your business! </p>
          <p>You will receive an email and text message from the information you provided</p>
        </section>
      );
    }
  
    console.log("Rendering null (default case)");
    return null; // Render nothing by default.
  };
  