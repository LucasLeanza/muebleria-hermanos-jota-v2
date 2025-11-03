import { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setStatus({ type: "error", message: "Por favor completa todos los campos." });
      return;
    }

    setStatus({
      type: "ok",
      message: "Gracias por tu mensaje. Nos pondremos en contacto pronto.",
    });
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <main>
      <section className="ui-section">
        <h1 className="ui-title">Contacto</h1>
        <form id="contacto" onSubmit={handleSubmit}>
          <label className="ui-label" htmlFor="contacto-nombre">
            Nombre
          </label>
          <input
            className="ui-input"
            id="contacto-nombre"
            name="nombre"
            type="text"
            placeholder="Escriba su nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          <label className="ui-label" htmlFor="contacto-email">
            Correo electronico
          </label>
          <input
            className="ui-input"
            id="contacto-email"
            name="email"
            type="email"
            placeholder="Escriba su email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="ui-label" htmlFor="contacto-mensaje">
            Mensaje
          </label>
          <textarea
            className="ui-textarea"
            id="contacto-mensaje"
            name="mensaje"
            rows={4}
            placeholder="Escriba su consulta aqui"
            value={formData.mensaje}
            onChange={handleChange}
          />

          <button type="submit" className="ui-button">
            Enviar
          </button>
        </form>

        {status?.type === "ok" && <div className="ui-success-box">{status.message}</div>}
        {status?.type === "error" && (
          <p style={{ color: "#b33a3a", textAlign: "center", marginTop: "12px", fontWeight: 600 }}>
            {status.message}
          </p>
        )}
      </section>

      <section className="card-box locales">
        <h3>Locales</h3>
        <address>
          <p>Av San Juan 2847</p>
          <p>San Cristobal, CABA</p>
        </address>
      </section>
    </main>
  );
}

export default Contacto;
