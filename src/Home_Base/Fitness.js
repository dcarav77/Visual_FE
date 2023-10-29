import React from 'react';
import './fitness.css';
import { useNavigate } from 'react-router-dom';

function Fitness() {
  const navigate = useNavigate();

  return (
    <div className="Fitness">
      <header>
      
      </header>

<section>
  <h2>Your Membership Includes...</h2>
  <article>
    <ul class="custom-list">
      <li>
        <div class="list-item">
          <h3>12 weeks of one-on-one coaching directly with Coach C</h3>
          <p>Option for a month-to-month commitment</p>
        </div>
      </li>
      <li>
        <div class="list-item">
          <h3>Custom Nutrition Breakdown & Meal Cheat Sheet Specific to your Body</h3>
          <p>Workout Calendar</p>
        </div>
      </li>
      <li>
        <div class="list-item">
          <h3>2x Weekly 60+Min Video Calls</h3>
          <p>Q&A Sessions - "How do I handle family & friends who want me to drink?"</p>
        </div>
      </li>
      <li>
        <div class="list-item">
          <h3>Access 24/7 support through our exclusive private app</h3>
          <p>Connect with like-minded individuals on a shared growth journey through our private accountability app</p>
        </div>
      </li>
    </ul>
  </article>
</section>

<section className="features">
        <h2>Make a Transformation</h2>
        <div className="feature">
          <img src="/images/bigsmall.png" alt="Feature 1" class="membership-image" />
          </div>
</section>


<section className="membership-options">
  <div className="membership-option">
    <h3>Monthly</h3>
    <p>$299 / MONTH</p>
  </div>
  <div className="membership-option">
    <h3>3 month commitment</h3>
    <p>$750 / 3 MONTHS</p>
  </div>
</section>

    
    </div>
  );
}

export default Fitness;
