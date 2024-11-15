import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from '../../organisms/layout/header';
import HeroSection from '../../organisms/layout/herosection';
//import AboutSection from '../../organisms/layout/aboutsection';
//import ServicesSection from '../../organisms/layout/servicessection';
//import NewsSection from '../../organisms/layout/newssection';
import Footer from '../../organisms/layout/footer';
import '../../../assets/styles/buttons/cta-button1.css';
import '../../../assets/styles/buttons/cta-button2.css';
import '../../../assets/styles/buttons/login-button.css';
import '../../../assets/styles/global/global.css';
import '../../../assets/styles/header/header.css';
import '../../../assets/styles/headings/headings.css';
import '../../../assets/styles/layout/landing-page.css';
import '../../../assets/styles/layout/sections.css';
import '../../../assets/styles/titles/titles.css';

const LandingPage = () => {
    return (
      <div className="landing-page">
        <Header />
        <HeroSection />
        <Footer />
      </div>
    );
  };
  
  export default LandingPage;