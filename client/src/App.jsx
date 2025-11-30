import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { AuthProvider } from "./context/AuthContext"; // Agregar esto

import Header from "./components/Header";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import DetalleProducto from "./pages/DetalleProducto";
import CrearProducto from "./pages/CrearProducto";

import Login from "./pages/Login";
import Register from './pages/Register';
import Perfil from "./pages/Perfil";
import MisPedidos from "./pages/MisPedidos";

import "./App.css";

function App() {
  return (
    <AuthProvider>
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
                <Route path="/admin/crear-producto" element={<CrearProducto />} />

                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/mis-pedidos" element={<MisPedidos />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;