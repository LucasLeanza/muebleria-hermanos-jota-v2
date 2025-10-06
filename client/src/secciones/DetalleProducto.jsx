import { useState, useEffect } from 'react';
import { useCart } from '../componentes/CartContext';

const productosCompletos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    imagen: "/img/Aparador Uspallata.png",
    descripcion: "Aparador de roble macizo con detalles en herrajes negros. Ideal para salas de estar espaciosas.",
    precio: 150000,
    detalles: [
      "Madera: Roble macizo certificado FSC",
      "Acabado: Aceite natural de linaza",
      "Medidas: 180cm x 45cm x 85cm",
      "Peso: 65kg",
      "Garantía: 5 años"
    ],
    caracteristicas: "Este aparador combina la calidez de la madera maciza con herrajes modernos en negro mate. Perfecto para almacenar vajilla y objetos decorativos."
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    imagen: "/img/Biblioteca Recoleta.png",
    descripcion: "Sistema modular con estructura Sage Green y repisas de roble claro. Diseño adaptable y funcional.",
    precio: 120000,
    detalles: [
      "Estructura: Pintura ecológica Sage Green",
      "Repisas: Roble claro de 2.5cm de espesor",
      "Sistema: Modular y expandible",
      "Medidas base: 120cm x 35cm x 200cm",
      "Montaje: Incluye instrucciones y herrajes"
    ],
    caracteristicas: "Diseñada para amantes de los libros, esta biblioteca modular permite personalizar el espacio según tus necesidades."
  },
  {
    id: 3,
    nombre: "Mesa de Centro Araucaria",
    imagen: "/img/Mesa de Centro Araucaria.png",
    descripcion: "Mesa de centro con sobre de mármol Patagonia y base de nogal. Minimalista y elegante para salas contemporáneas.",
    precio: 85000,
    detalles: [
      "Sobre: Mármol Patagonia de 3cm",
      "Base: Nogal macizo",
      "Acabado: Cera natural",
      "Medidas: 120cm x 60cm x 40cm",
      "Peso: 45kg"
    ],
    caracteristicas: "La combinación del mármol patagónico con la base de nogal crea un contraste único."
  },
  {
    id: 4,
    nombre: "Mesa de Noche Aconcagua",
    imagen: "/img/Mesa de Noche Aconcagua.png",
    descripcion: "Mesa de noche en roble FSC® con cajón oculto. Funcional y discreta para cualquier estilo de dormitorio.",
    precio: 45000,
    detalles: [
      "Madera: Roble FSC® certificado",
      "Cajón: Corredera suave con paro suave",
      "Acabado: Aceite y cera naturales",
      "Medidas: 50cm x 40cm x 55cm",
      "Peso: 12kg"
    ],
    caracteristicas: "Diseñada para espacios reducidos, esta mesa de noche maximiza el almacenamiento sin sacrificar elegancia."
  }
];

const DetalleProducto = ({ productoId, cambiarPagina }) => {
  const [producto, setProducto] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const productoEncontrado = productosCompletos.find(p => p.id === productoId);
    setProducto(productoEncontrado);
  }, [productoId]);

  if (!producto) {
    return (
      <main>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Producto no encontrado</p>
          <button onClick={() => cambiarPagina('catalogo')}>Volver al Catálogo</button>
        </div>
      </main>
    );
  }

  const agregarAlCarrito = () => {
    addToCart(producto);
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  return (
    <main>
      <div className="detalle-card">
        <div>
          <img src={producto.imagen} alt={producto.nombre} />
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
          <p>{producto.descripcion}</p>
          
          <h3>Características</h3>
          <p>{producto.caracteristicas}</p>

          <h3>Detalles Técnicos</h3>
          <ul className="detalles">
            {producto.detalles.map((detalle, index) => (
              <li key={index}>{detalle}</li>
            ))}
          </ul>
          
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