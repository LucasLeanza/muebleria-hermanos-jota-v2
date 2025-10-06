const Footer = ({ cambiarPagina }) => {
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
            <li>
              <button 
                onClick={() => cambiarPagina('inicio')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                onClick={() => cambiarPagina('catalogo')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Colección
              </button>
            </li>
            <li>
              <button 
                onClick={() => cambiarPagina('contacto')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Contacto
              </button>
            </li>
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