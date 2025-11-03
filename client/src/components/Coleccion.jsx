import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../services/api";

function resolveImgPath(data) {
  const s = data?.imagenUrl || data?.imageURL || data?.img || data?.imagen;
  if (!s) return "/img/placeholder.jpg";
  if (s.startsWith("http")) return s;
  if (s.startsWith("/")) return s;
  return `/img/${s}`;
}

function Coleccion() {
  const navigate = useNavigate();
  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const all = await getAllProducts();
        setDestacados((all || []).slice(0, 3));
      } catch (e) {
        console.error("No se pudieron cargar destacados", e);
      }
    })();
  }, []);

  return (
    <section className="coleccion">
      <header>
        <h2>Nuestra Colección</h2>
        <p>Conocé algunas piezas destacadas y explorá todo el catálogo.</p>
      </header>

      {destacados.length > 0 && (
        <div className="coleccion-items">
          {destacados.map((p) => {
            const id = p.id ?? p._id;
            return (
              <article key={id}>
                <div className="img-container">
                  <img
                    className="producto-img"
                    src={resolveImgPath(p)}
                    alt={p.nombre}
                    onError={(e) => (e.currentTarget.src = "/img/placeholder.jpg")}
                  />
                </div>
                <h3>{p.nombre}</h3>
                {p.precio != null && <p className="precio">${Number(p.precio).toLocaleString()}</p>}
                <div className="acciones">
                  <button className="btn-primary" onClick={() => navigate(`/productos/${id}`)}>Ver Detalle</button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: "1rem" }}>
        <button className="boton-primario" onClick={() => navigate("/catalogo")}>
          Ver Colección Completa
        </button>
        <button className="boton-secundario" onClick={() => navigate("/contacto")}>
          Contactar
        </button>
      </div>
    </section>
  );
}

export default Coleccion;
