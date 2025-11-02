import { Link } from "react-router-dom";

function resolveImgPath(data) {
  const s = data?.imagenUrl || data?.img || data?.imagen;
  if (!s) return "/img/placeholder.jpg";
  if (s.startsWith("http")) return s;
  if (s.startsWith("/")) return s;
  return `/img/${s}`;
}

function ProductCard({ product, onAddToCart }) {
  const id = product.id ?? product._id;

  return (
    <div className="productos-card">
      <div className="img-container">
        <Link to={`/productos/${id}`} aria-label={`Ver detalle de ${product.nombre}`}>
          <img
            src={resolveImgPath(product)}
            alt={product.nombre}
            className="producto-img"
            onError={(e) => (e.currentTarget.src = "/img/placeholder.jpg")}
          />
        </Link>
      </div>

      <div className="producto-info">
        <h3 className="producto-nombre">{product.nombre}</h3>
        {product.precio != null && (
          <p className="producto-precio">${Number(product.precio).toLocaleString()}</p>
        )}
      </div>

      <div className="producto-botones">
        <Link to={`/productos/${id}`} className="ver-detalles">
          Ver Detalles
        </Link>
        <button onClick={() => onAddToCart?.(product)} className="agregar-carrito">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;