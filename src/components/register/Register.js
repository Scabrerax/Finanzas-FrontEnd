import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import "./registro.css";
import { useDispatch, useSelector } from "react-redux";
import { startRegister } from "../../actions/register";
import { removeError, setError } from "../../actions/alertas";

export const Register = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.alerta);

  const initialState = {
    name: "Sergio",
    email: "scabrera@gmail.com",
    password: "12345678",
    confirmPassword: "12345678",
  };

  const [{ name, email, password, confirmPassword }, handleInputChange] =
    useForm(initialState);

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(
        startRegister({
          name,
          email,
          password,
        })
      );
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("¡¡Ingrese un nombre válido!!"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("¡¡Ingrese un correo válido!!"));
      return false;
    } else if (password !== confirmPassword) {
      dispatch(setError("¡¡Las contraseñas no coinciden!!"));
      return false;
    } else if(password.length < 8){
      dispatch(setError("¡¡Ingrese una contraseña válida!!"));
      return false;
    } else {
      dispatch(removeError());
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
        <h5>Regístrate</h5>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
        {msgError !== null && 
          <fragment>
            <div className="danger">
              {msgError}
            </div>
          </fragment>
        }

        <form onSubmit={handleRegister} className="form">
          <input
            type="text"
            placeholder="Nombre completo"
            name="name"
            autoComplete="true"
            value={name}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            autoComplete="true"
            value={email}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            autoComplete="true"
            value={password}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="confirmPassword"
            autoComplete="true"
            value={confirmPassword}
            onChange={handleInputChange}
            required
          />
          <br />
          <div>
            <p>Olvidaste tu contraseña?</p>
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};
