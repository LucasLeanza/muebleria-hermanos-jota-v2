import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../App.css';

const Perfil = () => {
  const { user, logout } = useAuth();

  const handleCerrarSesion = () => {
    logout(); 
  };

  if (!user) return <div className="card-box" style={{textAlign:'center'}}>Cargando...</div>;

  return (
    <div className="card-box" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <h1 className="catalogo-titulo" style={{ marginBottom: '2rem' }}>Mi Perfil</h1>
      
      <div className="perfil-info">
        {}
        {}
        <p><strong>Nombre:</strong> {user.nombre || user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
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