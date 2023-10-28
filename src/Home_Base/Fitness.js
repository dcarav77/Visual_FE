import React from 'react';
import './fitness.css';
import { useNavigate } from 'react-router-dom';

function Fitness() {
  const navigate = useNavigate();

  return (
    <div className="Fitness">
      <header>
        <nav>
          {/* Your navigation content goes here */}
        </nav>
      </header>

      <section>
  <h2>Your Membership Includes...</h2>
  <article>
    <ul>
      <li>
       
        <h3>12 weeks of one-on-one coaching directly with Coach C </h3>
        <p>Option for a month-to-month commitment</p>
        <h3>Custom Nutrition Breakdown & Meal Cheat Sheet Specific to your Body</h3>
      </li>
      <li>
      
        <p>Workout Calendar</p>
      </li>
      <li>
 
        <h3>2x Weekly 60+Min Video Calls </h3>
        <p>Q&A Sessions - "How do I handle family & friends who want me to drink?"</p>
      </li>
      <li>
       
        <h3>Access 24/7 support through our exclusive private app</h3>
        <p>Connect with like-minded individuals on a shared growth journey through our private accountability app</p>
      </li>
    </ul>
  </article>
</section>


      <aside>
        <div className="image-container">
          <img src="../images/abbs.jpeg" alt="Abbs" className="membership-image" />
        </div>
      </aside>
    </div>
  );
}

export default Fitness;
