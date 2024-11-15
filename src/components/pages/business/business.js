import React from 'react';
import Header from '../../organisms/layout/header'; 
import Footer from '../../organisms/layout/footer';

const Business = () => {
  return (
    <div className="about-us-page">
      <Header /> 
      <main>
        <h1>Negocios</h1>
        <p>Bienvenido a la sección de Nosotros. Aquí puedes encontrar más información sobre nosotros.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Business;