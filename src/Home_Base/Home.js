import React from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
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
        <h2>Invest in Yourself</h2>
        <p>If you’re ready to dominate every area of life, choose your path below and let’s fuckin get it! There’s no better way to master something than to invest in training, a mentor, or coach that can give you the best strategies and principles to achieve your desired outcome in half the time it would take trying to figure it all out on your own.</p>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Key Features</h2>
        {/* Feature 1 */}
        <div className="feature">
          <img src="feature-icon-1.png" alt="Feature 1" />
          <p>Track your workouts and progress.</p>
        </div>
        {/* Feature 2 */}
        <div className="feature">
          <img src="feature-icon-2.png" alt="Feature 2" />
          <p>Access a variety of fitness programs.</p>
        </div>
        {/* Add more features here */}
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        {/* Testimonial 1 */}
        <div className="testimonial">
          <p>"This app changed my life! I've never felt better."</p>
          <p>- John Doe</p>
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
