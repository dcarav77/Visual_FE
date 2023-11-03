import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-text">GET SOBER, GET LEAN, GET YOUR LIFE BACK</h2>
          <p className="footer-text">&copy; Copyright 2023 - All rights are reserved.</p>
          <p className="footer-text">Created by Strong all Along</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Links</h3>
          <ul className="footer-list">
            <li className="footer-list-item"><a href="#">Community</a></li>
            <li className="footer-list-item"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
  <h3 className="footer-heading">Social Media</h3>
  <ul className="footer-list">
    <li className="footer-list-item"><a href="https://www.instagram.com/strong_all_along/">Instagram</a></li>
    <li className="footer-list-item"><a href="https://www.youtube.com/channel/UCwMMGh3dRhbeZBmEgqAQEQg">Youtube</a></li>
    <li className="footer-list-item"><a href="https://twitter.com/Coach_Dustin_C">Twitter</a></li>
  </ul>
</div>

        <div className="footer-column">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-list">
            <li className="footer-list-item"><a href="#">Terms & conditions</a></li>
            <li className="footer-list-item"><a href="#">Privacy policy</a></li>
            <li className="footer-list-item"><a href="#">Disclaimer</a></li>
            <li className="footer-list-item"><a href="#">Return exchange</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
