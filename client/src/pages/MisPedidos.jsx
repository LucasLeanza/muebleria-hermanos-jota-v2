import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// TODO: Aquí se deberían fetchear los pedidos del usuario desde el backend.
const pedidos = [
  { id: '001', fecha: '2023-10-15', total: 250.75, estado: 'Entregado' },
  { id: '002', fecha: '2023-11-01', total: 120.00, estado: 'Entregado' },
  { id: '003', fecha: '2023-11-20', total: 85.50, estado: 'En proceso' },
];

const MisPedidos = () => {
  return (
    <div className="card-box cart-box" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <h1 className="catalogo-titulo" style={{ marginBottom: '2rem' }}>Mis Pedidos</h1>
      
      {pedidos.length > 0 ? (
        <ul className="carrito-lista">
          {pedidos.map(pedido => (
            <li key={pedido.id} className="carrito-item">
              <div className="info">
                <span className="nombre">Pedido #{pedido.id}</span>
                <span className="descripcion">Fecha: {pedido.fecha}</span>
              </div>
              <div className="cantidad-precio">
                <span className="precio">${pedido.total.toFixed(2)}</span>
                <span style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  backgroundColor: pedido.estado === 'Entregado' ? 'var(--color-secundario)' : 'var(--color-detalles)',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}>
                  {pedido.estado}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', margin: '2rem 0' }}>Aún no has realizado compras.</p>
      )}

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <Link to="/perfil" className="btn-secondary">
          Volver al Perfil
        </Link>
      </div>
    </div>
  );
};

export default MisPedidos;
