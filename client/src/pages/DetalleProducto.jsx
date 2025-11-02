import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

function resolveImgPath(data) {
  const s = data?.img || data?.imagen;
  if (!s) return "/img/placeholder.jpg";
  if (s.startsWith("http")) return s;
  if (s.startsWith("/")) return s;
  return `/img/${s}`;
}

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setCargando(true);
    fetch(`/api/productos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Producto no encontrado");
        setCargando(false);
      });
  }, [id]);

  const agregarAlCarrito = () => {
    if (producto) {
      addToCart(producto);
      alert(`¡${producto.nombre} agregado al carrito!`);
    }
  };

  if (cargando) {
    return (
      <main>
        <p style={{ textAlign: "center" }}>Cargando producto...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>{error}</p>
          <button onClick={() => navigate("/catalogo")}>
            Volver al catálogo
          </button>
        </div>
      </main>
    );
  }

  if (!producto) return null;

  const caracteristicas = (producto.descripcion || []).filter(
    (d) =>
      d.startsWith("Medidas") ||
      d.startsWith("Materiales") ||
      d.startsWith("Acabado")
  );
  const detallesTecnicos = (producto.descripcion || []).filter(
    (d) =>
      !d.startsWith("Medidas") &&
      !d.startsWith("Materiales") &&
      !d.startsWith("Acabado")
  );

  return (
    <main>
      <div className="detalle-card">
        <div>
          <img
            src={resolveImgPath(producto)}
            alt={producto.nombre}
            onError={(e) => {
              e.currentTarget.src = "/img/placeholder.jpg";
            }}
          />
        </div>

        <div className="info">
          <button
            onClick={() => navigate("/catalogo")}
            style={{
              background: "none",
              border: "none",
              color: "#A0522D",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            ← Volver al catálogo
          </button>

          <h1>{producto.nombre}</h1>
          <p className="precio">${producto.precio?.toLocaleString()}</p>

          <h3>Características</h3>
          {caracteristicas.length ? (
            <ul className="detalles">
              {caracteristicas.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          ) : (
            <p>No hay características disponibles.</p>
          )}

          <h3>Detalles Técnicos</h3>
          {detallesTecnicos.length ? (
            <ul className="detalles">
              {detallesTecnicos.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          ) : (
            <p>No hay detalles disponibles.</p>
          )}

          <button className="btn-carrito" onClick={agregarAlCarrito}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </main>
  );
}

export default DetalleProducto;
