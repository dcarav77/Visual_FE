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
            <li>12 weeks of one-on-one coaching directly with Dustin Caravaglia, with the option for a month-to-month commitment</li>
            <li>CUSTOM NUTRITION BREAKDOWN & MEAL CHEAT SHEET SPECIFIC TO YOUR BODY</li>
            <li>Workout Calendar</li>
            <li>2x WEEKLY ACCOUNTABILITY LIVE CHECK-IN CALLS</li>
            <li>Q&A Sessions- "How do I handle family members who encourage me to drink?"  </li>
            <li>Access 24/7 support through our exclusive private app</li>
            <li>Connect with like-minded individuals on a shared growth journey through our private accountability app.</li>
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
