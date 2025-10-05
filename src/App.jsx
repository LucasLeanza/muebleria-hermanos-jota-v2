import { useState } from 'react';
import { CartProvider } from './componentes/CartContext';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './secciones/Inicio';
import Catalogo from './secciones/Catalogo';
import Contacto from './secciones/Contacto';
import Carrito from './secciones/Carrito';
import DetalleProducto from './secciones/DetalleProducto';
import './App.css';

function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const cambiarPagina = (pagina, productoId = null) => {
    setPaginaActual(pagina);
    if (productoId) {
      setProductoSeleccionado(productoId);
    }
  };

  let paginaAMostrar;

  if (paginaActual === 'inicio') {
    paginaAMostrar = <Inicio cambiarPagina={cambiarPagina} />;
  } else if (paginaActual === 'catalogo') {
    paginaAMostrar = <Catalogo cambiarPagina={cambiarPagina} />;
  } else if (paginaActual === 'contacto') {
    paginaAMostrar = <Contacto />;
  } else if (paginaActual === 'carrito') {
    paginaAMostrar = <Carrito cambiarPagina={cambiarPagina} />;
  } else if (paginaActual === 'detalle') {
    paginaAMostrar = <DetalleProducto productoId={productoSeleccionado} cambiarPagina={cambiarPagina} />;
  } else {
    paginaAMostrar = <Inicio cambiarPagina={cambiarPagina} />;
  }

  return (
    <CartProvider>
      <div className="App">
        <Header cambiarPagina={cambiarPagina} paginaActual={paginaActual} />
        {paginaAMostrar}
        <Footer cambiarPagina={cambiarPagina} />
      </div>
    </CartProvider>
  );
}

export default App;