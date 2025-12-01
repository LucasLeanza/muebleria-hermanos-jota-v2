import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const MisPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch('/api/usuario/mis-pedidos', { 
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
             navigate('/login'); 
             return;
          }
          throw new Error('Error al obtener los pedidos');
        }

        const data = await response.json();
        setPedidos(data);
      } catch (err) {
        console.error(err);
        setError("No pudimos cargar tus pedidos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, [navigate]);

  if (loading) return <div className="card-box" style={{textAlign:'center', marginTop:'4rem'}}>Cargando historial...</div>;
  if (error) return <div className="card-box" style={{textAlign:'center', marginTop:'4rem', color:'red'}}>{error}</div>;

  return (
    <div className="card-box cart-box" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <h1 className="catalogo-titulo" style={{ marginBottom: '2rem' }}>Mis Pedidos</h1>
      
      {pedidos.length > 0 ? (
        <ul className="carrito-lista">
          {pedidos.map(pedido => (
            <li key={pedido._id} className="carrito-item">
              <div className="info">
                {}
                <span className="nombre">Pedido #{pedido._id.slice(-6)}</span>
                <span className="descripcion">
                    {}
                    Fecha: {new Date(pedido.createdAt).toLocaleDateString()}
                </span>
                {}
                <span className="descripcion" style={{fontSize: '0.8rem'}}>
                    Items: {pedido.productos?.length || 0}
                </span>
              </div>
              
              <div className="cantidad-precio">
                {}
                <span className="precio">${Number(pedido.total).toLocaleString()}</span>
                
                <span style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  
                  backgroundColor: pedido.estado === 'completado' ? 'var(--color-secundario)' : 'var(--color-detalles)',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '0.9rem'
                }}>
                  {pedido.estado || 'Pendiente'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <p>Aún no has realizado compras.</p>
        </div>
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