import React from 'react';
import Header from '../../organisms/layout/header'; 
import Footer from '../../organisms/layout/footer';

const Colleges = () => {
  return (
    <div className="about-us-page">
      <Header /> 
      <main>
        <h1>Universidades</h1>
        <p>Bienvenido a la sección de Nosotros. Aquí puedes encontrar más información sobre nosotros.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Colleges;