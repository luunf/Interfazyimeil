import React, { useState } from 'react';
import './InicioSesion.css';
import { useNavigate } from 'react-router-dom';

function InicioSesion({ onLoginSuccess }) {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");  
  const [error, setError] = useState("");  
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      
      const response = await fetch("https://poo2024.unsada.edu.ar/cuentas/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: email, 
          password: password 
        })
      });
  
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error desconocido');
      }
  
      const data = await response.json();
      const { token, userInfo } = data;
  
      
      localStorage.setItem("token", token);
  
    
      onLoginSuccess(token, userInfo);
      navigate('/bienvenida', { state: userInfo }); 
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <div className="inicio-sesion-container">
      <div className="form-container">
        <h1 className="yimail-text">
          <span className="y">Y</span>
          <span className="im">im</span>
          <span className="ei">ei</span>
          <span className="l">l</span>
        </h1>
        <h2>Inicio de Sesión</h2>
        
        {/* Formulario de inicio de sesión */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <button onClick={handleLogin}>Iniciar sesión</button>
        
        {/* Mostrar error si hay alguno */}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default InicioSesion;