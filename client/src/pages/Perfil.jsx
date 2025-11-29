import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// TODO: Aca se debería importar y utilizar el AuthContext para obtener los datos del usuario real.

const Perfil = () => {
  // Mock de datos del usuario basado en el modelo Usuario.js
  const [usuario] = useState({
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
  });

  const handleCerrarSesion = () => {
    console.log('Sesión cerrada');
    // Aca iría la lógica para limpiar el token y redirigir al inicio
  };

  return (
    <div className="card-box" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <h1 className="catalogo-titulo" style={{ marginBottom: '2rem' }}>Mi Perfil</h1>
      
      <div className="perfil-info">
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/mis-pedidos" className="btn-primary">
          Ver Mis Pedidos
        </Link>
        <button onClick={handleCerrarSesion} className="btn-secondary">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Perfil;
