import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;