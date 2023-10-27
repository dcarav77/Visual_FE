import React from 'react';
import './fitness.css';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Fitness() {
  const navigate = useNavigate();
  return (
    <div className="Fitness">
      
      <h2>Your Membership Includes...</h2>
      <ul>
        <li>12 WEEKS OF DIRECT PERSONAL COACHING WITH WES WATSON (month-to-month option available)</li>
        <li>CUSTOM NUTRITION BREAKDOWN & MEAL CHEAT SHEET SPECIFIC TO YOUR BODY</li>
        <li>WORKOUT CALENDAR & VIDEO GUIDED WORKOUTS</li>
        <li>2x WEEKLY ACCOUNTABILITY LIVE CHECK-IN CALLS</li>
        <li>24/7 SUPPORT ON MY PRIVATE APP</li>
        <li>ACCESS TO PRIVATE ACCOUNTABILITY APP TO CONNECT WITH OTHER PEOPLE ON THE SAME JOURNEY OF GROWTH.</li>
      </ul>
    </div> 
  );
}

export default Fitness;
