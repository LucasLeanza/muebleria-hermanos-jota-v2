import { useNavigate } from "react-router-dom";

function Principal() {
  const navigate = useNavigate();

  return (
    <section className="presentacion">
      <div>
        <div>
          <h1>Hermanos Jota</h1>
          <h2>
            Muebles que cuentan historias: tradición, innovación y
            sustentabilidad
          </h2>
          <p>
            El redescubrimiento del arte de crear muebles que alimentan el
            alma. Cada pieza honra la herencia de la artesanía y al mismo
            tiempo abraza el futuro con conciencia sustentable.
          </p>
        </div>

        <div>
          <button 
            onClick={() => navigate("/catalogo")}
            className="boton-primario"
          >
            Ver Colección
          </button>

          <button 
            onClick={() => navigate("/contacto")}
            className="boton-secundario"
          >
            Contactar
          </button>
        </div>
      </div>

      <div>
        <img src="/img/Aparador Uspallata.png" alt="Aparador Uspallata" />
      </div>
    </section>
  );
}

export default Principal;
