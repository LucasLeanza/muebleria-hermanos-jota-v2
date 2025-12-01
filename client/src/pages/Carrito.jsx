import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function resolveImgPath(data) {
  const s = data?.imagenUrl || data?.imagen || data?.img;
  if (!s) return "/img/placeholder.jpg";
  if (s.startsWith("http")) return s;
  if (s.startsWith("/")) return s;
  return `/img/${s}`;
}

function Carrito() {
  const navigate = useNavigate();
  
  
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  if (!cart || cart.length === 0) {
    return (
      <main>
        <section className="card-box" style={{ textAlign: "center", padding: "3rem" }}>
          <h2>Tu Carrito está Vacío</h2>
          <p>No hay productos en tu carrito de compras.</p>
          <button onClick={() => navigate("/catalogo")} className="btn-primary">
            Explorar Catálogo
          </button>
        </section>
      </main>
    );
  }

  const finalizarCompra = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para finalizar la compra.");
      navigate("/login");
      return;
    }

    setIsSubmitting(true);

    try {
      
      const BACKEND_URL = "https://muebleria-hermanos-jota-v2.onrender.com/"; 

      const response = await fetch(`${BACKEND_URL}/api/usuario/pedido`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({
          items: cart,
          total: total,
        }),
      });

      if (response.ok) {
        alert(`¡Pedido creado con éxito! Gracias por tu compra.`);
        clearCart(); 
        navigate("/mis-pedidos"); 
      } else {
        if (response.status === 401 || response.status === 403) {
          alert("Tu sesión ha expirado. Por favor inicia sesión nuevamente.");
          navigate("/login");
        } else {
          const data = await response.json();
          alert(`Error al procesar el pedido: ${data.message || "Intenta de nuevo"}`);
        }
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Hubo un problema de conexión con el servidor.");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <main>
      <section className="card-box cart-box">
        <h2>Tu Carrito de Compras</h2>

        <ul className="carrito-lista">
          {}
          {cart.map((item) => {
            const pid = item.id ?? item._id;

            return (
              <li key={pid} className="carrito-item">
                <img
                  src={resolveImgPath(item)}
                  alt={item.nombre}
                  onError={(e) => (e.currentTarget.src = "/img/placeholder.jpg")}
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
                    {}
                    <button onClick={() => updateQuantity(pid, item.cantidad - 1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => updateQuantity(pid, item.cantidad + 1)}>+</button>
                  </div>

                  <div className="precio">
                    {}
                    ${(Number(item.precio) * item.cantidad).toLocaleString()}
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
          {}
          <strong>Total: ${total.toLocaleString()}</strong>
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/catalogo")}
            className="btn-secondary"
            disabled={isSubmitting} 
          >
            Seguir Comprando
          </button>
          
          <button 
            onClick={finalizarCompra} 
            className="btn-primary"
            disabled={isSubmitting} 
            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
          >
            {isSubmitting ? "Procesando..." : "Finalizar Compra"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default Carrito;