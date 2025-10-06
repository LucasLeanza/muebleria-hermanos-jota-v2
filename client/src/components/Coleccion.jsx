import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

const Coleccion = ({ cambiarPagina }) => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/productos')
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then((data) => setProductos(data.slice(0, 3))) // 👈 solo 3 productos
      .catch((err) => console.error('Error al obtener productos:', err));
  }, []);

  return (
    <section className="coleccion">
      <h2>Nuestra colección</h2>
      <p>
        Descubre una selección de piezas más emblemáticas, donde cada mueble
        cuenta una historia de tradición y maestría artesanal.
      </p>

      <div className="coleccion-items">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <article key={producto.id}>
              <img
                src={`http://localhost:3000${producto.img || '/images/placeholder.jpg'}`}
                alt={producto.nombre}
                onError={(e) => {
                  e.target.src = '/img/placeholder.jpg';
                }}
              />
              <h3>{producto.nombre}</h3>
              <p className="precio">${producto.precio.toLocaleString()}</p>
              <div>
                <button
                  onClick={() => cambiarPagina('contacto')}
                  className="boton-consultar"
                >
                  Consultar
                </button>
                <button
                  onClick={() => cambiarPagina('detalle', producto.id)}
                  className="boton-detalles"
                >
                  Ver detalles →
                </button>
              </div>
            </article>
          ))
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>

      <button
        onClick={() => cambiarPagina('catalogo')}
        className="btn-primary"
      >
        Ver colección completa
      </button>
    </section>
  );
};

export default Coleccion;
