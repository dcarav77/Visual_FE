import React, { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { Navigate } from "react-router-dom";

// This is your test public API key.
const stripePromise = loadStripe("pk_test_51O7mnXEBiprZstxkJxFS7kV9OehUwg7zb7EWUFYVC9TpqLPYksFU43kEO494Gi0MiAxZk6ZUGg4dQnj5CMMk7Bvy00iCOLPehX");

export const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
  }, []);

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

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/session-status?session_id=${sessionId}`)
    .then((res) => res.json())
    .then((data) => {
      setStatus(data.status);
      setCustomerEmail(data.customer_email);
    });
  }, []);

  if (status === 'open') {
    return <Navigate to="/checkout" />;
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>We appreciate your business! A confirmation email will be sent to {customerEmail}.</p>
        <p>If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.</p>
      </section>
    );
  }

  return null;
};
