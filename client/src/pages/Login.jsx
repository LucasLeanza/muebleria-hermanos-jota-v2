import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        
        <div className="login-header">
          <h1>Bienvenido</h1>
          <h2>Ingresa a tu cuenta</h2>
        </div>

        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su email"
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="options">
            <div className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Recordarme</span>
            </div>
            <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>
          </div>

          <div className="line"></div>

          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>

          <div className="links">
            <p>No tenés cuenta? <Link to="/registro">Registrate aquí</Link></p>
            <Link to="/" className="back">Volver al inicio</Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;