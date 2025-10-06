import { useEffect, useState } from 'react';
import { useCart } from '../componentes/CartContext';

const Catalogo = ({ cambiarPagina }) => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/productos')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener productos');
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar los productos.');
        setCargando(false);
      });
  }, []);

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarAlCarrito = (producto) => {
    addToCart(producto);
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  if (cargando) return <p style={{ textAlign: 'center' }}>Cargando productos...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

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
          <div key={producto.id} className="productos-card">
            <div className="img-container">
              <img
  src={`http://localhost:3000${producto.img || producto.imagen}`}
  alt={producto.nombre}
  className="producto-img"
  onError={(e) => {
    e.target.src = '/img/placeholder.jpg';
  }}
/>

            </div>

            <div className="producto-info">
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-precio">
                ${producto.precio.toLocaleString()}
              </p>
              {/* Descripción removida */}
            </div>

            <div className="producto-botones">
              <button
                onClick={() => cambiarPagina('detalle', producto.id)}
                className="ver-detalles"
              >
                Ver Detalles
              </button>
              <button
                onClick={() => agregarAlCarrito(producto)}
                className="agregar-carrito"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </main>
  );
};

export default Catalogo;
