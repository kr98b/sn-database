import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/titles/titles.css';
import sycnowLogo from '../../../assets/images/icons/sycnow-logo.png';


const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/beta'); 
  };

  return (
    <div className="landing-content first-section">
      <div className="left-text">
        <h1 className='site-7ayfm-landing-title'>
        <img src={sycnowLogo} alt="SycNow Logo"></img>
        </h1>
        <div className="cta-container">
          <button className="cta-button1" onClick={handleButtonClick}>
            ACCESO BETA
          </button>
          <span className="notification-bubble">7</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
