import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/navigation/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav>
          <ul>
            <li><Link to="/about_us">Nosotros</Link></li>
            <li><Link to="/how-to">Funcionalidad</Link></li>
            <li><Link to="/college">Universidades</Link></li>
            <li><Link to="/business">Negocios</Link></li>
            <li><Link to="/updates">Actualizaciones</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
