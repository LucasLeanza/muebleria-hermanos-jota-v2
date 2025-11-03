import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const CORE = new Set([
  '_id', 'id', '__v',
  'nombre', 'precio', 'descripcion',
  'imagenUrl', 'imageURL', 'img', 'imagen',
  'createdAt', 'updatedAt'
]);

const pretty = (s) =>
  s.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).trim();

const fmt = (v) => Array.isArray(v) ? v.join(', ')
  : v && typeof v === 'object' ? JSON.stringify(v)
    : typeof v === 'boolean' ? (v ? 'Sí' : 'No')
      : v ?? '';

const resolveImgPath = (p) => {
  const s = p?.imagenUrl || p?.imageURL || p?.img || p?.imagen;
  if (!s) return '/img/placeholder.jpg';
  if (s.startsWith('http') || s.startsWith('/')) return s;
  return `/img/${s}`;
};

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
    fetch('http://localhost:3000/api/productos/' + id)
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


  const descList = Array.isArray(producto.descripcion)
    ? producto.descripcion
    : (typeof producto.descripcion === 'string'
      ? producto.descripcion
        .split(/\r?\n|[•·;-]+/)
        .map(s => s.trim())
        .filter(Boolean)
      : []);

  const caracteristicas = descList.filter(d =>
    d.startsWith('Medidas') || d.startsWith('Materiales') || d.startsWith('Acabado')
  );

  const detallesTecnicos = descList.filter(d =>
    !d.startsWith('Medidas') && !d.startsWith('Materiales') && !d.startsWith('Acabado')
  );

  const extras = Object.entries(producto || {})
    .filter(([k, v]) =>
      !CORE.has(k) && v != null &&
      !(Array.isArray(v) && v.length === 0) &&
      !(typeof v === 'object' && v && Object.keys(v).length === 0)
    );

  // Descripción: soporta string o array con poco código
  const desc = producto?.descripcion;



  return (
    <main>
      <div className="detalle-card">
        <div>
          <img src={resolveImgPath(producto)} alt={producto?.nombre}
            onError={e => e.currentTarget.src = '/img/placeholder.jpg'} />
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



          <h3>Descripción</h3> {Array.isArray(desc) ? <ul className="detalles">{desc.map((d, i) => <li key={i}>{d}</li>)}</ul> : (desc ? <p>{desc}</p> : <p>Sin descripción</p>)}
          {extras.length > 0 && (
            <>
              <h3>Otros Atributos</h3>
              <ul className="detalles">
                {extras.map(([k, v]) => (
                  <li key={k}><strong>{pretty(k)}:</strong> {fmt(v)}</li>
                ))}
              </ul>
            </>
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
