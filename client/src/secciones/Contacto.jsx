import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    
    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

  return (
    <main>
      <form id="contacto" className="card-box" onSubmit={handleSubmit}>
        <h2>Contáctanos</h2>
        
        {enviado && (
          <div style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            ¡Mensaje enviado correctamente! Te contactaremos pronto.
          </div>
        )}

        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escriba su nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escriba su email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="asunto">Asunto:</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Ej: Consulta sobre mesa de comedor"
            value={formData.asunto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escriba su consulta aquí"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar Mensaje</button>
      </form>

      <section className="locales card-box">
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
};

export default Contacto;