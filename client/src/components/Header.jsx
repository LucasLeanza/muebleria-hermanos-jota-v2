import { useState } from 'react';
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const irA = (ruta) => {
    navigate(ruta);
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <button 
          onClick={() => irA('/')}
          className="boton-logo"
        >
          <img 
            src="/img/logo.svg" 
            alt="Logo de Hermanos Jota" 
            className="logo" 
          />
        </button>
        
        <button 
          onClick={() => irA('/carrito')}
          className="cart-link"
        >
          <i className="fa-solid fa-shopping-cart"></i>
          <span className="cart-text">Carrito</span>
          (<span id="cart-count">{cartCount}</span>)
        </button>

        <button 
          className="nav-toggle" 
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${menuAbierto ? 'active' : ''}`}>
          <li>
            <button 
              onClick={() => irA('/')}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => irA('/catalogo')}
              className={location.pathname === '/catalogo' ? 'active' : ''}
            >
              Colección
            </button>
          </li>
          <li>
            <button 
              onClick={() => irA('/contacto')}
              className={location.pathname === '/contacto' ? 'active' : ''}
            >
              Contacto
            </button>
          </li>
          
          <li>
            <button 
              onClick={() => irA('/login')}
              className={location.pathname === '/login' ? 'active' : ''}
            >
              Iniciar Sesión
            </button>
          </li>

          <li>
            <button 
              onClick={() => irA('/registro')}
              className={`register-btn-nav ${location.pathname === '/registro' ? 'active' : ''}`}
            >
              Registrarse
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

