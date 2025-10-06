import { useCart } from '../componentes/CartContext';

const Carrito = ({ cambiarPagina }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <main>
        <section className="card-box" style={{ textAlign: 'center', padding: '3rem' }}>
          <h2>Tu Carrito está Vacío</h2>
          <p>No hay productos en tu carrito de compras.</p>
          <button 
            onClick={() => cambiarPagina('catalogo')}
            className="btn-primary"
          >
            Explorar Catálogo
          </button>
        </section>
      </main>
    );
  }

  const finalizarCompra = () => {
    alert(`¡Gracias por tu compra! Total: $${cartTotal.toLocaleString()}`);
    clearCart();
    cambiarPagina('inicio');
  };

  return (
    <main>
      <section className="card-box">
        <h2>Tu Carrito de Compras</h2>
        
        <ul className="carrito-lista">
          {cartItems.map(item => (
            <li key={item.id} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} />
              
              <div className="info">
                <span className="nombre">{item.nombre}</span>
                <span className="descripcion">{item.descripcion}</span>
              </div>

              <div className="cantidad-precio">
                <div className="cantidad">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <div className="precio">
                  ${(item.precio * item.quantity).toLocaleString()}
                </div>

                <button 
                  className="btn-eliminar"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="total-carrito">
          <strong>Total: ${cartTotal.toLocaleString()}</strong>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button 
            onClick={() => cambiarPagina('catalogo')}
            className="btn-secondary"
          >
            Seguir Comprando
          </button>
          <button 
            onClick={finalizarCompra}
            className="btn-primary"
          >
            Finalizar Compra
          </button>
        </div>
      </section>
    </main>
  );
};

export default Carrito;