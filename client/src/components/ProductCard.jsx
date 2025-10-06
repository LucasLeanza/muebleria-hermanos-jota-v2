export default function ProductCard({ producto, onVerDetalle, onAgregarCarrito }) {
  return (
    <div className="productos-card">
      <div className="img-container">
        <img
          src={`http://localhost:3000${producto.img || producto.imagen || "/img/placeholder.jpg"}`}
          alt={producto.nombre}
          className="producto-img"
          onError={(e) => {
            e.target.src = "/img/placeholder.jpg";
          }}
        />
      </div>

      <div className="producto-info">
        <h3 className="producto-nombre">{producto.nombre}</h3>
        {producto.medida && <p>{producto.medida}</p>}
        {producto.materiales && <p>{producto.materiales}</p>}
        <p className="producto-precio">${producto.precio.toLocaleString()}</p>
      </div>

      <div className="producto-botones">
        <button className="ver-detalles" onClick={onVerDetalle}>
          Ver Detalles
        </button>
        <button className="agregar-carrito" onClick={onAgregarCarrito}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

