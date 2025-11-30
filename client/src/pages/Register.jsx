import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      return setError('Las contraseñas no coinciden');
    }

    if (formData.password.length < 6) {
      return setError('La contraseña debe tener al menos 6 caracteres');
    }

    setLoading(true);

    try {
      // TEMPORAL: Simular registro exitoso y hacer login automáticamente
      const mockUser = { 
        id: Date.now(), 
        nombre: formData.nombre, 
        email: formData.email 
      };
      const mockToken = 'mock-token-' + Date.now();
      
      login(mockToken, mockUser); // CAMBIADO: usar login en lugar de register
      navigate('/'); 
    } catch (error) {
      setError('Error al crear la cuenta: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-header">
          <h1>Hermanos Jota</h1>
          <h2>Creá tu cuenta</h2>
          <p>Unite a la comunidad de Hermanos Jota</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Juan Pérez"
              required
            />
          </div>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su email"
              required
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingrese una contraseña"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar contraseña"
              required
            />
          </div>

          <div className="line"></div>

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
          </button>

          <div className="links">
            <p>¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link></p>
            <Link to="/" className="back">Volver al inicio</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;