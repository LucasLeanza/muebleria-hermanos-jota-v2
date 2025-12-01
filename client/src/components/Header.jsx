import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { cartCount } = useCart();
  const { isAuth, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const irA = (ruta) => {
    navigate(ruta);
    setMenuAbierto(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setMenuAbierto(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header className="header">
      <nav className="nav">

        {/* LOGO */}
        <button onClick={() => irA('/')} className="boton-logo">
          <img src="/img/logo.svg" alt="Logo de Hermanos Jota" className="logo" />
        </button>

        {/* MENÚ CENTRADO */}
        <ul className={`nav-menu ${menuAbierto ? 'active' : ''}`}>
          <li>
            <button
              onClick={() => irA('/')}
              className={location.pathname === '/' ? 'active' : ''}
            >Inicio</button>
          </li>

          <li>
            <button
              onClick={() => irA('/catalogo')}
              className={location.pathname === '/catalogo' ? 'active' : ''}
            >Colección</button>
          </li>

          <li>
            <button
              onClick={() => irA('/contacto')}
              className={location.pathname === '/contacto' ? 'active' : ''}
            >Contacto</button>
          </li>

          {/* BOTONES DE AUTH EN MOBILE (dentro del menú hamburguesa) */}
          <div className="nav-menu-auth">
            {isAuth ? (
              <>
                <li>
                  <button
                    onClick={() => irA('/perfil')}
                    className={location.pathname === '/perfil' ? 'active' : ''}
                  >
                    Mi Perfil
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => irA('/mis-pedidos')}
                    className={location.pathname === '/mis-pedidos' ? 'active' : ''}
                  >
                    Mis Pedidos
                  </button>
                </li>

                <li>
                  <button onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <>
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
                    className={`register-btn-mobile ${location.pathname === '/registro' ? 'active' : ''}`}
                  >
                    Registrarse
                  </button>
                </li>
              </>
            )}
          </div>
        </ul>

        {/* NAV-ACTIONS: CARRITO + AUTH (desktop) */}
        <div className="nav-actions">
          {/* CARRITO */}
          <button
            onClick={() => irA('/carrito')}
            className="cart-link"
            aria-label="Carrito de compras"
          >
            <div className="cart-icon-wrapper">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </button>

          {isAuth ? (
            <>
              <button
                onClick={() => irA('/perfil')}
                className={`nav-action-btn ${location.pathname === '/perfil' ? 'active' : ''}`}
              >
                Mi Perfil
              </button>

              <button
                onClick={() => irA('/mis-pedidos')}
                className={`nav-action-btn ${location.pathname === '/mis-pedidos' ? 'active' : ''}`}
              >
                Mis Pedidos
              </button>

              <button onClick={handleLogout} className="logout-btn">
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => irA('/login')}
                className={`nav-action-btn ${location.pathname === '/login' ? 'active' : ''}`}
              >
                Iniciar Sesión
              </button>

              <button
                onClick={() => irA('/registro')}
                className={`register-btn-nav ${location.pathname === '/registro' ? 'active' : ''}`}
              >
                Registrarse
              </button>
            </>
          )}
        </div>

        {/* BOTÓN HAMBURGUESA (mobile) */}
        <button
          className="nav-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>

        {/* CARRITO MOBILE CENTRADO */}
        <button
          onClick={() => irA('/carrito')}
          className="cart-link cart-link-mobile"
          aria-label="Carrito de compras"
        >
          <div className="cart-icon-wrapper">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </button>

      </nav>
    </header>
  );

}

export default Header;

