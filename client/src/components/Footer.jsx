import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

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
                onClick={() => navigate("/")}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/catalogo")}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}
              >
                Colección
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/contacto")}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}
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
            <a href="mailto:info@hermanosjota.com.ar">info@hermanosjota.com.ar</a>
          </p>
        </address>
      </section>

      <div className="footer-bottom">
        <p>© Hermanos Jota. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;