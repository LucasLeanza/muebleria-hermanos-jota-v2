import { useState } from "react";

export default function CrearProducto() {
  // Estado del formulario
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    stock: "",
    imagen: ""
  });

  // Manejar cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    console.log("Producto enviado:", producto);
    // Aquí después conectaremos con la API (POST /productos)
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h1>Crear nuevo producto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Precio:
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Categoría:
          <input
            type="text"
            name="categoria"
            value={producto.categoria}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          URL de Imagen:
          <input
            type="text"
            name="imagen"
            value={producto.imagen}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Guardar producto</button>
      </form>
    </div>
  );
}
