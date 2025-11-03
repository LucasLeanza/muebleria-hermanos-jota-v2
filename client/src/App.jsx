import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './secciones/Inicio';
import Catalogo from './pages/Catalogo';
import Contacto from './secciones/Contacto';
import Carrito from './secciones/Carrito';
import DetalleProducto from './secciones/DetalleProducto';
import CrearProducto from './pages/admin/CrearProducto';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/detalle/:id" element={<DetalleProducto />} />
          <Route path="/admin/crearProducto" element={<CrearProducto />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
