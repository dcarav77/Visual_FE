import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

//hardcoded need to change
const stripePromise = loadStripe("pk_live_51O7mnXEBiprZstxkBlUcDaR3NN4Qkmke4LtW5RVGRwKiRl6kdWLNdWf8sXrgVKcPJw9TXzPf052gmzRmxEQ6OfAU002CcUGNPs");



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
