import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CrearProducto() {
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
    stock: "",
  });

  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      await axios.post("http://localhost:5000/productos", producto);
      setMensaje("✅ Producto creado con éxito");

      setProducto({
        id: "",
        nombre: "",
        precio: "",
        categoria: "",
        descripcion: "",
        stock: "",
      });

      setTimeout(() => {
        navigate("/"); // redirige a la página principal
      }, 1500);

    } catch (error) {
      console.error("Error al crear producto:", error);
      setMensaje("❌ Hubo un error al crear el producto");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-box">
      <h2 className="ui-title mb-4">Crear Producto</h2>

      <div className="mb-3">
        <label className="ui-label">ID:</label>
        <input type="number" name="id" value={producto.id} onChange={handleChange} className="w-full border p-2 rounded" required />
      </div>

      <div className="mb-3">
        <label className="ui-label">Nombre:</label>
        <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Ej: Aparador Uspallata" required />
      </div>

      <div className="mb-3">
        <label className="ui-label">Precio:</label>
        <input type="number" name="precio" value={producto.precio} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Ej: 1500" required />
      </div>

      <div className="mb-3">
        <label className="ui-label">Descripción:</label>
        <textarea name="descripcion" value={producto.descripcion} onChange={handleChange} className="w-full border p-3 rounded text-base h-48 resize-none" placeholder="Ej: Escritorio compacto con cajón organizado..." />
      </div>

      <div className="mb-3">
        <label className="ui-label">Categoría:</label>
        <select name="categoria" value={producto.categoria} onChange={handleChange} className="w-full border p-2 rounded" required>
          <option value="">Seleccionar...</option>
          <option value="almacenamiento">Almacenamiento</option>
          <option value="asientos">Asientos</option>
          <option value="mesas">Mesas</option>
          <option value="dormitorio">Dormitorio</option>
          <option value="oficina">Oficina</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="ui-label">Stock:</label>
        <input type="number" name="stock" value={producto.stock} onChange={handleChange} className="w-full border p-2 rounded" required />
      </div>

      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
        Crear Producto
      </button>

      {mensaje && <p className="mt-3 text-center">{mensaje}</p>}
    </form>
  );
}

export default CrearProducto;
