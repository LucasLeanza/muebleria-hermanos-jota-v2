import { useState, useEffect } from 'react';
import { useCart } from '../components/CartContext';

const DetalleProducto = ({ productoId, cambiarPagina }) => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!productoId) return;

    setCargando(true);
    fetch(`http://localhost:3000/api/productos/${productoId}`)
      .then(res => {
        if (!res.ok) throw new Error('Producto no encontrado');
        return res.json();
      })
      .then(data => {
        setProducto(data);
        setCargando(false);
      })
      .catch(err => {
        console.error(err);
        setError('Producto no encontrado');
        setCargando(false);
      });
  }, [productoId]);

  const agregarAlCarrito = () => {
    if (producto) {
      addToCart(producto);
      alert(`¡${producto.nombre} agregado al carrito!`);
    }
  };

  if (cargando) {
    return (
      <main>
        <p style={{ textAlign: 'center' }}>Cargando producto...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>{error}</p>
          <button onClick={() => cambiarPagina('catalogo')}>Volver al Catálogo</button>
        </div>
      </main>
    );
  }

  if (!producto) return null;

  // Separar Características y Detalles Técnicos
  const caracteristicas = producto.descripcion.filter(d =>
    d.startsWith('Medidas') || d.startsWith('Materiales') || d.startsWith('Acabado')
  );

  const detallesTecnicos = producto.descripcion.filter(d =>
    !d.startsWith('Medidas') && !d.startsWith('Materiales') && !d.startsWith('Acabado')
  );

  return (
    <main>
      <div className="detalle-card">
        <div>
          <img
            src={`http://localhost:3000${producto.img || '/images/placeholder.jpg'}`}
            alt={producto.nombre}
            onError={e => { e.target.src = '/img/placeholder.jpg'; }}
          />
        </div>

        <div className="info">
          <button 
            onClick={() => cambiarPagina('catalogo')}
            style={{ background: 'none', border: 'none', color: '#A0522D', cursor: 'pointer', marginBottom: '1rem' }}
          >
            ← Volver al catálogo
          </button>

          <h1>{producto.nombre}</h1>
          <p className="precio">${producto.precio.toLocaleString()}</p>

          <h3>Características</h3>
          {caracteristicas.length > 0 ? (
            <ul className="detalles">
              {caracteristicas.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          ) : <p>No hay características disponibles.</p>}

          <h3>Detalles Técnicos</h3>
          {detallesTecnicos.length > 0 ? (
            <ul className="detalles">
              {detallesTecnicos.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          ) : <p>No hay detalles disponibles.</p>}

          <button 
            className="btn-carrito"
            onClick={agregarAlCarrito}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </main>
  );
};

export default DetalleProducto;
