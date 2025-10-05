import Principal from '../componentes/Principal';
import Esencia from '../componentes/Esencia';
import Coleccion from '../componentes/Coleccion';

const Inicio = ({ cambiarPagina }) => {
  return (
    <main>
      <Principal cambiarPagina={cambiarPagina} />
      <Esencia />
      <Coleccion cambiarPagina={cambiarPagina} />
    </main>
  );
};

export default Inicio;