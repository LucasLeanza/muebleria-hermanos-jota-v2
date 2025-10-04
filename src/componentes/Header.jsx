import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" onClick={closeMenu}>
          <img src="/img/logo.svg" alt="Logo de Hermanos Jota" className="logo" />
        </Link>
        
        <Link to="/carrito" className="cart-link" aria-label="Ver carrito" onClick={closeMenu}>
          <i className="fa-solid fa-shopping-cart"></i>
          <span className="cart-text">Carrito</span>
          (<span id="cart-count">{cartCount}</span>)
        </Link>

        <button 
          className="nav-toggle" 
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={isActiveLink('/')} onClick={closeMenu}>Inicio</Link>
          </li>
          <li>
            <Link to="/catalogo" className={isActiveLink('/catalogo')} onClick={closeMenu}>Colección</Link>
          </li>
          <li>
            <Link to="/contacto" className={isActiveLink('/contacto')} onClick={closeMenu}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;