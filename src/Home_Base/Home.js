import React, { useEffect } from 'react';
import './home.css'
//import './Home_Base/home.css';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {

    document.body.classList.add('hide-header');
    return () => {
      
      document.body.classList.remove('hide-header');
    };
  }, []);
  
  
  return (
    <div className="Home">
      {/* Hero Section */}
      <section className="hero">
        <h1>One Step Closer To</h1>
        <p>Strength and Honor</p>
        <button className="cta-button" onClick={() => navigate('/UnleashHell')}>Unleash Hell</button>
      </section>

      {/* Unlock */}
      <section className="about">
        <h1>GET YOUR LIFE BACK</h1>
        <p>Why me, there are thousands of "coaches"??</p>
        <p>Just like University, there are Top Tier and then everyone else</p>
        <p>Accountability is key:</p>
        <p>Let's get you going back in the right direction </p>
      </section>

      {/* Feature 1 */}
      <section className="features">
        <h2>Sick of being DRUNK??</h2>
        <h2>Seeking a Romantic Connection...</h2>
        <div className="feature">
          <img src="/images/drunkgreen.jpeg" alt="Feature 1"  class="feature-image-1" />
          <h3>I was an Alcoholic Pleasure Seeker</h3>
          <p>Bagging Groceries - Living in a Double Wide Trailer - Looking for LOVE in a BAR! </p>
        </div>
        {/* Feature 2 */}
        <div className="feature">
          <img src="/images/legs.jpeg" alt="Feature 2" class="feature-image-2" />
          <h2>5+ Years Later...</h2>
          <h3>No Alchol or Drugs</h3>
          <h4>Founder & Chief Software Engineer  </h4>
          <h4>Elite Strength - Speed - Stamina</h4>
        </div>
       
      </section>

      <section className="four-pic">
    <div className="testimonial-content">
        <h2>I Need a Drink, I Need a Break, I Need to Relax!</h2>
        <div className="relax">
            <h4>If you think MORE comfort is what you need</h4>
            <h4>Get on this program</h4>
        </div>
    </div>
</section>


      {/* Download/Signup CTA */}
      <section className="cta">
        <h2>Get Sober, Get Lean, Get Your Life Back</h2>
        <button className="cta-button" onClick={() => navigate('/UnleashHell')}>  Sign Up Now </button>

      </section> 
    </div> 
  );
}

export default Home;
