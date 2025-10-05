import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; // <-- ruta correcta

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Error al cargar productos");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Catálogo de productos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {productos.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

