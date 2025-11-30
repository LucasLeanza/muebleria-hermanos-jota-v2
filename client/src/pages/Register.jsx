import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos registro:', { nombre, email, password, confirmPassword });
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-header">
          <h1>Hermanos Jota</h1>
          <h2>Creá tu cuenta</h2>
          <p>Unite a la comunidad de Hermanos Jota</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Juan Pérez"
            />
          </div>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa una contraseña"
            />
          </div>

          <div className="input-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repetir contraseña"
            />
          </div>

          <div className="line"></div>

          <button type="submit" className="register-btn">
            Crear Cuenta
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