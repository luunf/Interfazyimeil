import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './Componentes/InicioSesion';
import Bienvenida from './Componentes/Bienvenida';
import BandejaDeEntrada from './Componentes/BandejaDeEntrada';

function App() {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const handleLoginSuccess = (token, userInfo) => {
    setToken(token);  // Guardar el token de autenticación
    setUserInfo(userInfo);  // Guardar la información del usuario
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<InicioSesion onLoginSuccess={handleLoginSuccess} />} 
          />
          <Route
            path="/bienvenida"
            element={<Bienvenida userInfo={userInfo} />}
          />
        <Route 
          path="/bandeja-de-entrada" 
          element={<BandejaDeEntrada token={token} systemId={userInfo?.userId} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;

