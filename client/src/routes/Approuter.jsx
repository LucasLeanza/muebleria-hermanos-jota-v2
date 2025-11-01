// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogo from "../pages/Catalogo";
import CrearProducto from "../pages/admin/CrearProducto";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        
        <Route path="/admin/crear-producto" element={<CrearProducto />} />
      </Routes>
    </Router>
  );
}
