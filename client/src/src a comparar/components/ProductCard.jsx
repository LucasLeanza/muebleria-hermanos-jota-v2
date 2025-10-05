import React from "react";

export default function ProductCard({ producto }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
      <img
  src={`http://localhost:3000${producto.imagen}`} // <- Apunta directamente al backend
  alt={producto.nombre}
  style={{ width: "100%", height: "150px", objectFit: "cover" }}
/>

      <h2>{producto.nombre}</h2>
      <p>{producto.medida}</p>
      <p>{producto.materiales}</p>
      <button>Abrir</button>
    </div>
  );
}
