import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Help men lose weight & free themselves from the things that hold them back from self-respect & growth.</p>
          <p className="footer-text">&copy; Copyright 2021 - All rights are reserved.</p>
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
            <li className="footer-list-item"><a href="#">Facebook</a></li>
            <li className="footer-list-item"><a href="#">Instagram</a></li>
            <li className="footer-list-item"><a href="#">Youtube</a></li>
            <li className="footer-list-item"><a href="#">Twitter</a></li>
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
