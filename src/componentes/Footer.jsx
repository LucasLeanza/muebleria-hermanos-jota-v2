import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-brand">
        <h2>Hermanos Jota</h2>
        <p>
          Muebles que cuentan historias: tradición, innovación y
          sustentabilidad. Cada pieza honra la herencia de la artesanía.
        </p>
      </section>

      <section className="footer-nav">
        <h3>Navegación</h3>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Colección</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </section>

      <section className="footer-contact">
        <h3>Contacto</h3>
        <address>
          <p>Av. San Juan 2847</p>
          <p>San Cristóbal, CABA</p>
          <p>+54 11 4567-8900</p>
          <p>
            <a href="mailto:info@hermanosjota.com.ar">
              info@hermanosjota.com.ar
            </a>
          </p>
        </address>
      </section>

      <div className="footer-bottom">
        <p>© 2025 Hermanos Jota. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;