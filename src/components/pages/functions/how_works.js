import React from 'react';
import Header from '../../organisms/layout/header'; 
import Footer from '../../organisms/layout/footer';

const Howto = () => {
  return (
    <div className="about-us-page">
      <Header /> {/* El header maneja el switch de tema */}
      <main>
        <h1>Funcionalidad</h1>
        <p>Bienvenido a la sección de Nosotros. Aquí puedes encontrar más información sobre nosotros.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Howto;
