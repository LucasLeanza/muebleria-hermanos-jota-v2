import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../componentes/CartContext';

const productosCompletos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    imagen: "/img/Aparador Uspallata.png",
    descripcion: "Aparador de roble macizo con detalles en herrajes negros. Ideal para salas de estar espaciosas.",
    precio: 150000,
    categoria: "salas",
    stock: 5
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    imagen: "/img/Biblioteca Recoleta.png",
    descripcion: "Sistema modular con estructura Sage Green y repisas de roble claro. Diseño adaptable y funcional.",
    precio: 120000,
    categoria: "bibliotecas",
    stock: 3
  },
  {
    id: 3,
    nombre: "Mesa de Centro Araucaria",
    imagen: "/img/Mesa de Centro Araucaria.png",
    descripcion: "Mesa de centro con sobre de mármol Patagonia y base de nogal. Minimalista y elegante para salas contemporáneas.",
    precio: 85000,
    categoria: "mesas",
    stock: 8
  },
  {
    id: 4,
    nombre: "Mesa de Noche Aconcagua",
    imagen: "/img/Mesa de Noche Aconcagua.png",
    descripcion: "Mesa de noche en roble FSC® con cajón oculto. Funcional y discreta para cualquier estilo de dormitorio.",
    precio: 45000,
    categoria: "dormitorios",
    stock: 12
  },
  {
    id: 5,
    nombre: "Sillón Patagonia",
    imagen: "/img/Sofá Patagonia.png",
    descripcion: "Sillón ergonómico con estructura de madera maciza y tapizado en lino natural. Confort y diseño en armonía.",
    precio: 180000
  },
  {
    id: 6,
    nombre: "Mesa de Comedor Pampa",
    imagen: "/img/Mesa Comedor Pampa.png",
    descripcion: "Mesa de comedor extensible en roble natural. Perfecta para reuniones familiares y cenas especiales.",
    precio: 220000
  }
];

const Catalogo = () => {
  const [productos, setProductos] = useState(productosCompletos);
  const [busqueda, setBusqueda] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    if (busqueda.trim() === '') {
      setProductos(productosCompletos);
    } else {
      const filtered = productosCompletos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
      setProductos(filtered);
    }
  }, [busqueda]);

  return (
    <main>
      <section className="catalogo-encabezado">
        <h1 className="catalogo-titulo">Nuestra Colección</h1>
        <p className="catalogo-bajada">
          Cada pieza es única, creada con amor y dedicación por nuestros
          artesanos. Descubre muebles que se convertirán en parte de tu historia
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
        {productos.map(producto => (
          <div key={producto.id} className="productos-card">
            <div className="img-container">
              <img 
                src={producto.imagen} 
                alt={producto.nombre}
                className="producto-img"
                onError={(e) => {
                  e.target.src = '/img/placeholder.jpg';
                }}
              />
            </div>
            
            <div className="producto-info">
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-precio">${producto.precio.toLocaleString()}</p>
              <p>{producto.descripcion}</p>
              <small>Stock: {producto.stock} unidades</small>
            </div>

            <div className="producto-botones">
              <Link 
                to={`/detalle-producto/${producto.id}`}
                className="ver-detalles"
              >
                Ver Detalles
              </Link>
              <button 
                className="agregar-carrito"
                onClick={() => {
                  addToCart(producto);
                  alert(`${producto.nombre} agregado al carrito`);
                }}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {productos.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </main>
  );
};

export default Catalogo;