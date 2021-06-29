import React from "react";
import {Link} from 'react-router-dom'
import "./registro.css"

export const Register = () => {
  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Finan Fácil.</h1>
          <p>Aquí manejarás tus finanzas de una manera sencilla y amigable.</p>
        </div>
      </div>

      <div className="right">
        <h5>Registrarme</h5>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
        <div className="inputs">
          <input type="text" placeholder="Nombre completo" />
          <br />
          <input type="text" placeholder="Correo electrónico" />
          <br />
          <input type="password" placeholder="Contraseña" />
          <br />
          <input type="password" placeholder="Confirmar contraseña" />
        </div>

        <br />

        <div className="remember-me--forget-password">
          <p>Olvidaste tu contraseña?</p>
        </div>
        <button>Ingresar</button>
      </div>
    </div>
  );
};
