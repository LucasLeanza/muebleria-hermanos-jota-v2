const Principal = ({ cambiarPagina }) => {
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
            onClick={() => cambiarPagina('catalogo')}
            className="boton-primario"
          >
            Ver Colección
          </button>
          <button 
            onClick={() => cambiarPagina('contacto')}
            className="boton-secundario"
          >
            Contactar
          </button>
        </div>
      </div>
      <div>
        <img src="http://localhost:3000/images/Aparador_Uspallata.png" alt="Aparador Uspallata" />
      </div>
    </section>
  );
};

export default Principal;