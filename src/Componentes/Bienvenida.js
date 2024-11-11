import React, { useEffect } from 'react';
import './Bienvenida.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Bienvenida() {
  const { state } = useLocation();
  const { name, surname } = state || { name: '', surname: '' };
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/bandeja-de-entrada');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    //no muestra el nombre ni el apellido¿¿
    <div className="bienvenida-container">
      <h1>Bienvenido/a, <span>{name} {surname}</span></h1>
      <p>Redirigiendo a tu bandeja de entrada...</p>
    </div>
  );
}

export default Bienvenida;
