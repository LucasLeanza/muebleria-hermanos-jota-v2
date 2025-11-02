import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function resolveImgPath(data) {
  const s = data?.imagenUrl || data?.img || data?.imagen;
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
        const res = await fetch("/api/productos");
        if (!res.ok) throw new Error("bad status");
        const all = await res.json();
        setDestacados((all || []).slice(0, 3));
      } catch {
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
        <div className="coleccion-grid">
          {destacados.map((p) => {
            const id = p.id ?? p._id;
            return (
              <article key={id} className="coleccion-card">
                <img
                  src={resolveImgPath(p)}
                  alt={p.nombre}
                  onError={(e) => (e.currentTarget.src = "/img/placeholder.jpg")}
                />
                <div className="info">
                  <h3>{p.nombre}</h3>
                  {p.precio != null && <p>${Number(p.precio).toLocaleString()}</p>}
                  <div className="acciones">
                    <button onClick={() => navigate(`/productos/${id}`)}>Ver Detalle</button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
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