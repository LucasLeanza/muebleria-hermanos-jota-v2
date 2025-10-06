export default function ProductCard({ producto, onVerDetalle, onAgregarCarrito }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "250px" }}>
      <img
        src={`http://localhost:3000${producto.img || producto.imagen || "/images/placeholder.jpg"}`}
        alt={producto.nombre}
        style={{ width: "100%", height: "auto" }}
        onError={(e) => {
          e.target.src = "/img/placeholder.jpg";
        }}
      />
      <h3>{producto.nombre}</h3>
      {producto.medida && <p>{producto.medida}</p>}
      {producto.materiales && <p>{producto.materiales}</p>}
      <p>Precio: ${producto.precio.toLocaleString()}</p>
      <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "space-between" }}>
        <button onClick={onVerDetalle}>Ver Detalles</button>
        <button onClick={onAgregarCarrito}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

