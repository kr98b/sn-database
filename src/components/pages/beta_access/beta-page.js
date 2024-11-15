import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '../../organisms/layout/footer';
import '../../../assets/styles/buttons/cta-button1.css';
import BetaSection from '../../organisms/layout/beta/beta-service';
import Header from '../../organisms/layout/header';

const BetaPage = () => {
    return (
      <div className="landing-page">
        <Header />
        <BetaSection />
        <Footer />

      </div>
    );
  };
  
  export default BetaPage;