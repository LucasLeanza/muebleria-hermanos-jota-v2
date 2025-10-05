export default function ProductCard({ producto }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "250px" }}>
      <img
        src={`http://localhost:3000${producto.img}`}
        alt={producto.nombre}
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{producto.nombre}</h3>
      <p>{producto.medida}</p>
      <p>{producto.materiales}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}
