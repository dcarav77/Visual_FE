import React from 'react';
import './fitness.css';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 'product1',
    name: 'One Month Plan',
    price: 299,
    stripePriceId: 'price_1OIZF4EBiprZstxk4WEIomoJ'
  },
  {
    id: 'product2',
    name: 'Three Month Plan',
    price: 750,
    stripePriceId: 'price_1OIZHNEBiprZstxkGmLELjaG'
  }
];

function Fitness() {
  const navigate = useNavigate();


  const handleSelectProduct = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      navigate('/checkout', { state: { selectedProduct } });
    }
  };
   
  return (
    <div className="Fitness">
      <header>
      
      </header>

      <section className="membership">
  <h2>Your Membership Includes...</h2>
  <ul className="custom-list">
    <li>
      <div className="list-item">
        <span className="checkmark">✔</span>
        <div className="list-content">
          
          <h3>2x Weekly 60+ Minute Video Calls</h3>
          <p>Q&A Sessions - "How do I handle family & friends who want me to drink?"</p>
        </div>
      </div>
    </li>
    <li>
      <div className="list-item">
        <span className="checkmark">✔</span>
        <div className="list-content">
          <h3>Custom made meal plan, specific to your body</h3>
          <p>No more guesswork, Macronutrients made simple </p>
        </div>
      </div>
    </li>
    <li>
      <div className="list-item">
        <span className="checkmark">✔</span>
        <div className="list-content">
        <h3>Proven Fitness Guidance from an NCAA Wrestler and Special Operations Vet  </h3>
        </div>
      </div>
    </li>
    <li>
      <div className="list-item">
        <span className="checkmark">✔</span>
        <div className="list-content">
          <h3>Access 24/7 support through the exclusive private app</h3>
          <p>Connect with like-minded individuals on a shared growth journey through our private accountability app</p>
        </div>
      </div>
    </li>
  </ul>
</section>

<section className="features">
        <h2>Make a Transformation</h2>
        <div className="feature">
          <img src="/images/bigsmall.png" alt="Feature 1" class="membership-image" />
          </div>
</section>


<section className="membership-options">
  <div className="membership-option" onClick={() => handleSelectProduct('product1')}>
    <h3>Monthly</h3>
    <p>$299 / MONTH</p>
  </div>
  <div className="membership-option" onClick={() => handleSelectProduct('product2')}>
    <h3>3 month commitment</h3>
    <p>$750 / 3 MONTHS</p>
  </div>
</section>

    
    </div>
  );
}

export default Fitness;
