import React from "react";
import {Link} from 'react-router-dom'
import "./inicio.css";

export const Login = () => {
  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Finan Fácil.</h1>
          <p>
            Aquí manejarás tus finanzas de una manera
            sencilla y amigable.
          </p>
        </div>
      </div>

      <div className="right">
        <h5>Iniciar Sesión</h5>
        <p className="mt-5">
          ¿No tienes una cuenta? <Link to="/register">Crear una cuenta</Link> Solo te tomará
          un minuto
        </p>
        <div className="inputs">
          <input type="text" placeholder="Correo electrónico" />
          <br />
          <input type="password" placeholder="Contraseña" />
        </div>

        <br />
        

        <div className="remember-me--forget-password">
          <p>Olvidaste tu contraseña?</p>
        </div>
				<button>
					Ingresar
				</button>
				
      </div>
    </div>
  );
};
