import React from 'react';
import { Link } from 'react-router-dom';

const Principal = () => {  // ← Cambiado el nombre
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
          <Link to="/catalogo">Ver Colección</Link>
          <Link to="/contacto">Contactar</Link>
        </div>
      </div>
      <div>
        <img src="/img/Aparador Uspallata.png" alt="Aparador Uspallata" />
      </div>
    </section>
  );
};

export default Principal;  // ← Cambiado