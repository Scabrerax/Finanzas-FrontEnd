import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { removeError, setError } from "../../actions/alertas";
import { startLogin } from "../../actions/login";
import { useForm } from "../../hooks/useForm";
import { Alert } from "../alert/Alert";
import "./inicio.css";

export const Login = () => {

  const dispatch = useDispatch()

  const { msgError } = useSelector(state => state.alerta)

  const initialState = {
    email: 'scabrera@gmail.com',
    password: '12345678'
  }

  const handleAlert = () => {
    dispatch(removeError())
  }

  const [{ email, password }, handleInputChange] = useForm(initialState)
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLogin({
        email,
        password,
      }))
    }
  }

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("¡¡Ingrese un correo válido!!"));
      return false;
    } else if (password.length < 8) {
      dispatch(setError("¡¡Ingrese una contraseña válida!!"));
      return false;
    } else {
      dispatch(removeError())
      return true;
    }
  };

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
          ¿No tienes una cuenta? <Link to="/register" onClick={handleAlert}>Crear una cuenta</Link>{" "}
          Solo te tomará un minuto
        </p>
        <form onSubmit={handleLogin} className="inputs">
          {
            (msgError) && <div className="danger" id="mydiv">{msgError}</div>
          }
          <input
            type="email"
            placeholder="Correo electrónico"
            name='email'
            value={email}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            name='password'
            value={password}
            onChange={handleInputChange}
            minLength="8"
            required
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
      <Alert />
    </div>
  );
};
