import React from 'react';
import Principal from '../componentes/Principal';  // ← Cambiado
import Esencia from '../componentes/Esencia';
import Coleccion from '../componentes/Coleccion';

const Inicio = () => {
  return (
    <main>
      <Principal />  {/* ← Cambiado */}
      <Esencia />
      <Coleccion />
    </main>
  );
};

export default Inicio;