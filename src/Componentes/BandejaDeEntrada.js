/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BandejaDeEntrada.css';



  return (
    <div className="bandeja-container">
      <h2 className="bandeja-header">Bandeja de Entrada</h2>

      <div className="bandeja-buttons">
        <button className="nuevo-correo-btn" onClick={() => navigate('/enviar-correo')}>
          Escribir nuevo correo
        </button>
      </div>

      {emails.length > 0 ? (
        <div className="email-list">
          {emails.map((email) => (
            <div className="email-item" key={email.emailId}>
              <div className="email-preview">
                <div className="email-info">
                  <h3>{email.subject}</h3>
                  <p>De: {email.from}</p>
                  <p className="email-received-at">Recibido: {email.receivedAt}</p>
                </div>
                <button className="ver-correo-btn" onClick={() => navigate(`/email/${email.emailId}`)}>
                  Ver correo
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-emails">No tienes correos.</p>
      )}
    </div>
);*/