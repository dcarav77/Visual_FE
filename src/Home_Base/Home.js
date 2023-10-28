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
        <p>I have spent the past year with one of the TOP Mindeset/Performance coaches around </p>
        <p>You need that coaches voice in your head EVERYDAY</p>
      </section>

      {/* Features */}
      <section className="features">
        <h2>I don't know WHO you ARE??</h2>
        {/* Feature 1 */}
        <div className="feature">
          <img src="/images/bigsmall.png" alt="Feature 1" />
          
          <h3>Alcoholic to Workaholic</h3>
          <p>Former NCAA Wrestler / Special Operations soldier HIT ROCK BOTTOM </p>
        </div>
        {/* Feature 2 */}
        <div className="feature">
          <img src="/images/merangeredit.png" alt="Feature 2" />
          <p>5+ Years Sober</p>
          <p>Elite STRENGH - SPEED - STAMINA</p>
        </div>
       
      </section>

      {/* Testimonials */}
      <section className="testimonials testimonial-background">
        <h2>I Need a Drink, I need a Break, I Need to Relax!</h2>
        <div className="testimonial" style={{ marginTop: '330px' }}>
          <h3>FRAT BOYS!</h3>
          <p>It's NOT about what you WANT to do</p>
          <p>It's what you HAVE to do</p>
        </div>
        {/* Add more testimonials here */}
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
