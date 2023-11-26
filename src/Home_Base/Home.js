import React, { useEffect } from 'react';
import './home.css'
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
        <h1>Unlock Your Potential</h1>
        <p>Discover the most effective path to mastery by investing in self-improvement through training, mentorship, or coaching. </p>
        <p>I have dedicated myself to rigorous training under the guidance of a renowned Mindset/Performance coach.</p>
        <p>A coach's role isn't to make decisions for you, but rather to safeguard you from making detrimental choices. </p>
      </section>

      {/* Feature 1 */}
      <section className="features">
        <h2>Sick of being DRUNK??</h2>
        <h2>Seeking a Connection...</h2>
        <div className="feature">
          <img src="/images/drunkgreen.jpeg" alt="Feature 1"  class="feature-image-1" />
          <h3>I was an Alcoholic, Pleasure Seeker</h3>
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

      <section className="testimonials testimonial-background">
        <h2 style={{ marginLeft: '330px' }}>I Need a Drink, I need a Break, I Need to Relax!</h2>
        <div className="testimonial" style={{ marginTop: '275px', width: '400px', height: '120px', marginLeft: '330px' }}>
          <h3>FRAT BOYS!</h3>
          <p>It's NOT about what you WANT to do</p>
          <p>It's what you HAVE to do</p>
        </div>
        
      </section>

      {/* Download/Signup CTA */}
      <section className="cta">
        <h2>Get Sober, Get Lean, Get Your Life Back</h2>
        <button className="cta-button" onClick={() => navigate('/signup')}>  Sign Up Now </button>

      </section> 
    </div> 
  );
}

export default Home;
