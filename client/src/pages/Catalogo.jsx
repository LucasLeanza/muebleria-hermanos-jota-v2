import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";
import ProductCard from "../components/ProductCard.jsx";


export default function Catalogo({ cambiarPagina }) {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los productos.");
        setLoading(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    addToCart(producto);
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <section className="catalogo-encabezado">
        <h1 className="catalogo-titulo">Nuestra Colección</h1>
        <p className="catalogo-bajada">
          Cada pieza es única, creada con amor y dedicación por nuestros
          artesanos. Descubrí muebles que se convertirán en parte de tu historia
          familiar.
        </p>

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
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onVerDetalle={() => cambiarPagina("detalle", producto.id)}
            onAgregarCarrito={() => agregarAlCarrito(producto)}
          />
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </main>
  );
}
