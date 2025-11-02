import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import DetalleProducto from "./pages/DetalleProducto";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main style={{ minHeight: "70vh" }}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/productos/:id" element={<DetalleProducto />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
