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

      {/* About Us */}
      <section className="about">
        <h1>Invest in Yourself</h1>
        <p>There’s no better way to master something than to invest in training, a mentor, or coach </p>
        <p>I have spent the past year TRAINING with one of the TOP Mindeset/Performance coaches</p>
        <p>A coach should NOT make decisions for you, they keep you from making BAD ones </p>
      </section>

      {/* Feature 1 */}
      <section className="features">
        <h2>Sick of being DRUNK, & seeking a real CONNECTION?</h2>
        <div className="feature">
          <img src="/images/drunkgreen.jpeg" alt="Feature 1"  class="feature-image-1" />
          <h3>Alcoholic, Pleasure Seeker</h3>
          <p>Bagging Groceries - Living in a Double Wide Trailer - Drinking my Life away </p>
        </div>
        {/* Feature 2 */}
        <div className="feature">
          <img src="/images/legs.jpeg" alt="Feature 2" class="feature-image-2" />
          <p>5+ Years Later...</p>
          <p>Founder and Chief Software Engineer at SaaS startup </p>
          <p>Elite Strength - Speed - Stamina</p>
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
        <h2>Ready to Get Started?</h2>
        <button className="cta-button" onClick={() => navigate('/signup')}>  Sign Up Now </button>

      </section> 
    </div> 
  );
}

export default Home;
