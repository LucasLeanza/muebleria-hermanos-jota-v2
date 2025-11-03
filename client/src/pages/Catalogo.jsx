import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";
import ProductCard from "../components/ProductCard";

function Catalogo() {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/productos"); // ← API real (con proxy o backend levantado)
        if (!res.ok) throw new Error("bad status");
        const data = await res.json();
        if (!cancel) setProductos(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!cancel) setError("No se pudieron cargar los productos.", e);
      } finally {
        if (!cancel) setCargando(false);
      }
    })();
    return () => { cancel = true; };
  }, []);

  const productosFiltrados = productos.filter((p) =>
    (p?.nombre || "").toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarAlCarrito = (producto) => {
    addToCart(producto);
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  if (cargando) return <p style={{ textAlign: "center" }}>Cargando productos...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <main>
      <section className="catalogo-encabezado">
        <h1 className="catalogo-titulo">Nuestra Colección</h1>
        <p className="catalogo-bajada">Explorá los muebles del catálogo.</p>

        <div className="catalogo-busqueda">
          <input
            type="search"
            className="catalogo-busqueda-input"
            placeholder="Buscar Productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </section>

      <div className="catalogo">
        {productosFiltrados.map((p) => (
          <ProductCard
            key={p.id ?? p._id}
            product={p}
            onAddToCart={agregarAlCarrito}
          />
        ))}
      </div>

      {productos.length > 0 && productosFiltrados.length === 0 && (
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </main>
  );
}

export default Catalogo;