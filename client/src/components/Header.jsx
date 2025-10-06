import { useState } from 'react';
import { useCart } from './CartContext';

const Header = ({ cambiarPagina, paginaActual }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { cartCount } = useCart();

  const irA = (pagina) => {
    cambiarPagina(pagina);
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <button 
          onClick={() => irA('inicio')}
          className="boton-logo"
        >
          <img src="/img/logo.svg" alt="Logo de Hermanos Jota" className="logo" />
        </button>
        
        <button 
          onClick={() => irA('carrito')}
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
              onClick={() => irA('inicio')}
              className={paginaActual === 'inicio' ? 'active' : ''}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => irA('catalogo')}
              className={paginaActual === 'catalogo' ? 'active' : ''}
            >
              Colección
            </button>
          </li>
          <li>
            <button 
              onClick={() => irA('contacto')}
              className={paginaActual === 'contacto' ? 'active' : ''}
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;