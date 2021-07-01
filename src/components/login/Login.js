import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../actions/login";
import { useForm } from "../../hooks/useForm";
import "./inicio.css";

export const Login = () => {

  const dispatch = useDispatch()
  const initialState = {
    email: 'scabrera@gmail.com',
    password: '12345678'
  }

  const [{ email, password }, handleInputChange] = useForm(initialState)

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin({
      email,
      password,
    }))
  }

  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Finan Fácil.</h1>
          <p>Aquí manejarás tus finanzas de una manera sencilla y amigable.</p>
        </div>
      </div>

      <div className="right">
        <h5>Iniciar Sesión</h5>
        <p className="mt-5">
          ¿No tienes una cuenta? <Link to="/register">Crear una cuenta</Link>{" "}
          Solo te tomará un minuto
        </p>
        <form onSubmit={handleLogin} className="inputs">
          <input
            type="email"
            placeholder="Correo electrónico"
            name='email'
            value={email}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            name='password'
            value={password}
            onChange={handleInputChange}
          />
          <div className="remember-me--forget-password">
            <Link to='/login'>Olvidaste tu contraseña?</Link>
          </div>
          <button
            type='submit'
          >Ingresar</button>
        </form>

        <br />
      </div>
    </div>
  );
};
