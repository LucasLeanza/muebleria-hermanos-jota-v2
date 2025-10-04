import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../componentes/CartContext';

const productosCompletos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    imagen: "/img/Aparador Uspallata.png",
    descripcion: "Aparador de roble macizo con detalles en herrajes negros. Ideal para salas de estar espaciosas.",
    precio: 150000,
    categoria: "salas",
    stock: 5,
    detalles: [
      "Madera: Roble macizo certificado FSC",
      "Acabado: Aceite natural de linaza",
      "Medidas: 180cm x 45cm x 85cm",
      "Peso: 65kg",
      "Garantía: 5 años"
    ],
    caracteristicas: "Este aparador combina la calidez de la madera maciza con herrajes modernos en negro mate."
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    imagen: "/img/Biblioteca Recoleta.png",
    descripcion: "Sistema modular con estructura Sage Green y repisas de roble claro. Diseño adaptable y funcional.",
    precio: 120000,
    categoria: "bibliotecas",
    stock: 3,
    detalles: [
      "Estructura: Pintura ecológica Sage Green",
      "Repisas: Roble claro de 2.5cm de espesor",
      "Sistema: Modular y expandible",
      "Medidas base: 120cm x 35cm x 200cm",
      "Montaje: Incluye instrucciones y herrajes"
    ],
    caracteristicas: "Diseñada para amantes de los libros, esta biblioteca modular permite personalizar el espacio."
  }
];

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoEncontrado = productosCompletos.find(p => p.id === parseInt(id));
    if (productoEncontrado) {
      setProducto(productoEncontrado);
    }
  }, [id]);

  if (!producto) {
    return (
      <main>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Producto no encontrado</p>
          <button onClick={() => navigate('/catalogo')}>Volver al Catálogo</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="detalle-card">
        <div>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        
        <div className="info">
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
            onClick={() => {
              addToCart(producto);
              alert('Producto agregado al carrito');
            }}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </main>
  );
};

export default DetalleProducto;