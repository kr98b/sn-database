import React from 'react';
import Header from '../../organisms/layout/header'; // Asegúrate de importar el Header
import Footer from '../../organisms/layout/footer';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Header /> {/* El header maneja el switch de tema */}
      <main>
        <h1>Sobre Nosotros</h1>
        <p>Bienvenido a la sección de Nosotros. Aquí puedes encontrar más información sobre nosotros.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
