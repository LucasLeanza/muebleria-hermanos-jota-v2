import { useNavigate } from "react-router-dom";

function Principal() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a la tienda</h1>
      <p>Desde aquí podés crear un nuevo producto.</p>

      <button
        onClick={() => navigate("/crear-producto")}
        className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Crear un Producto
      </button>
    </div>
  );
}

export default Principal;
