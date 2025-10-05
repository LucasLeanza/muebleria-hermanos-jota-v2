import React, { useState } from "react";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contacto:", { nombre, email, mensaje });
    setEnviado(true);
  }

  return (
    <div className="ui-section">
      <h2 className="ui-title">Contacto</h2>
      <form onSubmit={handleSubmit}>

        <label className="ui-label">Nombre</label>
        <input
          type="text"
          className="ui-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="ui-label">Email</label>
        <input
          type="email"
          className="ui-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="ui-label">Mensaje</label>
        <textarea
          className="ui-textarea"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />

        <button type="submit" className="ui-button"> Enviar </button>
      </form>

      {enviado && <p className="ui-ok">¡Mensaje enviado con éxito!</p>}
    </div>
  );
}

export default ContactForm;