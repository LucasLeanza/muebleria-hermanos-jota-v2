import React, { useState, useEffect } from "react";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contacto:", { nombre, email, asunto, mensaje });
    setEnviado(true);
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  }

  useEffect(() => {
    if (!enviado) return;
    const t = setTimeout(() => setEnviado(false), 5000);
    return () => clearTimeout(t);
  }, [enviado]);

  return (
    <main className="ui-section">
      <h2 className="ui-title">Contacto</h2>

      {enviado && (
        <div role="status" className="ui-success-box">
          ¡Mensaje enviado correctamente! Te contactaremos pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} className="card-box" noValidate>
        <label className="ui-label" htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          className="ui-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="ui-label" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="ui-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="ui-label" htmlFor="asunto">Asunto</label>
        <input
          id="asunto"
          type="text"
          className="ui-input"
          placeholder="Ej: Consulta sobre mesa de comedor"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          required
        />

        <label className="ui-label" htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          rows={5}
          className="ui-textarea"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />

        <button type="submit" className="ui-button">Enviar</button>
      </form>

      <section className="locales card-box" style={{ marginTop: "1.5rem" }}>
        <h3>Nuestro Local</h3>
        <address>
          <p>Av. San Juan 2847</p>
          <p>San Cristóbal, CABA</p>
          <p>+54 11 4567-8900</p>
          <p>info@hermanosjota.com.ar</p>
        </address>
      </section>
    </main>
  );
}

export default ContactForm;
