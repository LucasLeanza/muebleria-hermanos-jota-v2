import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

function resolveImgPath(data) {
  const s = data?.imagenUrl || data?.imagen || data?.img;
  if (!s) return "/img/placeholder.jpg";
  if (s.startsWith("http")) return s;
  if (s.startsWith("/")) return s;
  return `/img/${s}`;
}

function Carrito() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <main>
        <section
          className="card-box"
          style={{ textAlign: "center", padding: "3rem" }}
        >
          <h2>Tu Carrito está Vacío</h2>
          <p>No hay productos en tu carrito de compras.</p>
          <button onClick={() => navigate("/catalogo")} className="btn-primary">
            Explorar Catálogo
          </button>
        </section>
      </main>
    );
  }

  const finalizarCompra = () => {
    alert(`¡Gracias por tu compra! Total: $${cartTotal.toLocaleString()}`);
    clearCart();
    navigate("/");
  };

  return (
    <main>
      <section className="card-box cart-box">
        <h2>Tu Carrito de Compras</h2>

        <ul className="carrito-lista">
          {cartItems.map((item) => {
            const pid = item.id ?? item._id;

            return (
              <li key={pid} className="carrito-item">
                <img
                  src={resolveImgPath(item)}
                  alt={item.nombre}
                  onError={(e) =>
                    (e.currentTarget.src = "/img/placeholder.jpg")
                  }
                />

                <div className="info">
                  <span className="nombre">{item.nombre}</span>
                  <span className="descripcion">
                    {Array.isArray(item.descripcion)
                      ? item.descripcion[0]
                      : item.descripcion}
                  </span>
                </div>

                <div className="cantidad-precio">
                  <div className="cantidad">
                    <button
                      onClick={() => updateQuantity(pid, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(pid, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="precio">
                    ${(Number(item.precio) * item.quantity).toLocaleString()}
                  </div>

                  <button
                    className="btn-eliminar"
                    onClick={() => removeFromCart(pid)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="total-carrito">
          <strong>Total: ${cartTotal.toLocaleString()}</strong>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button
            onClick={() => navigate("/catalogo")}
            className="btn-secondary"
          >
            Seguir Comprando
          </button>
          <button onClick={finalizarCompra} className="btn-primary">
            Finalizar Compra
          </button>
        </div>
      </section>
    </main>
  );
}

export default Carrito;
