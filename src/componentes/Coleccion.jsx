import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    imagen: "/img/Aparador Uspallata.png",
    descripcion: "Aparador de roble macizo con detalles en herrajes negros. Ideal para salas de estar espaciosas.",
    precio: 150000
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    imagen: "/img/Biblioteca Recoleta.png",
    descripcion: "Sistema modular con estructura Sage Green y repisas de roble claro. Diseño adaptable y funcional.",
    precio: 120000
  },
  {
    id: 3,
    nombre: "Mesa de Centro Araucaria",
    imagen: "/img/Mesa de Centro Araucaria.png",
    descripcion: "Mesa de centro con sobre de mármol Patagonia y base de nogal. Minimalista y elegante para salas contemporáneas.",
    precio: 85000
  },
  {
    id: 4,
    nombre: "Mesa de Noche Aconcagua",
    imagen: "/img/Mesa de Noche Aconcagua.png",
    descripcion: "Mesa de noche en roble FSC® con cajón oculto. Funcional y discreta para cualquier estilo de dormitorio.",
    precio: 45000
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

const Coleccion = () => {
  const { addToCart } = useCart();

  return (
    <section className="coleccion">
      <h2>Nuestra colección</h2>
      <p>
        Descubre una selección de piezas más emblemáticas, donde cada mueble
        cuenta una historia de tradición y maestría artesanal.
      </p>

      <div className="coleccion-items">
        {productos.map(producto => (
          <article key={producto.id}>
            <img 
              src={producto.imagen} 
              alt={producto.nombre}
              onError={(e) => {
                e.target.src = '/img/placeholder.jpg';
              }}
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <div>
              <Link to="/contacto">Consultar</Link>
              <Link to={`/detalle-producto/${producto.id}`}>Ver detalles →</Link>
            </div>
          </article>
        ))}
      </div>

      <Link to="/catalogo" className="btn-primary">
        Ver colección completa
      </Link>
    </section>
  );
};

export default Coleccion;