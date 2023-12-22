import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51O7mnXEBiprZstxkJxFS7kV9OehUwg7zb7EWUFYVC9TpqLPYksFU43kEO494Gi0MiAxZk6ZUGg4dQnj5CMMk7Bvy00iCOLPehX");

export const PaymentIntentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [userEmail, setUserEmail] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePaymentIntent = async () => {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
      email: userEmail,
      },
    });

    if (error) {
      console.log('[error]', error);
      setPaymentStatus('Payment failed');
    } else {
      console.log('PaymentIntent', paymentIntent);
      setPaymentStatus('Payment succeeded');
      // Optionally, send paymentIntent.id to your server for further processing
    }
  };

  return (
    <div>
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <CardElement />
      <button onClick={handlePaymentIntent} disabled={!stripe || !elements}>
        Pay
      </button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};
