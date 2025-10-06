import Principal from '../components/Principal';
import Esencia from '../components/Esencia';
import Coleccion from '../components/Coleccion';

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