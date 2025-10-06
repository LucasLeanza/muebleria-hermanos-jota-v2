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
    precio: 180000,
    categoria: "sillones"
  },
  {
    id: 6,
    nombre: "Mesa de Comedor Pampa",
    imagen: "/img/Mesa Comedor Pampa.png",
    descripcion: "Mesa de comedor extensible en roble natural. Perfecta para reuniones familiares y cenas especiales.",
    precio: 220000,
    categoria: "comedores"
  }
];

const Coleccion = ({ cambiarPagina }) => {
  const { addToCart } = useCart();

  const agregarAlCarrito = (producto) => {
    addToCart(producto);
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  const verDetalles = (productoId) => {
    cambiarPagina('detalle', productoId);
  };

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
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <div>
              <button 
                onClick={() => cambiarPagina('contacto')}
                className="boton-consultar"
              >
                Consultar
              </button>
              <button 
                onClick={() => verDetalles(producto.id)}
                className="boton-detalles"
              >
                Ver detalles →
              </button>
            </div>
          </article>
        ))}
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