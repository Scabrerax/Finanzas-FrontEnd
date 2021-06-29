import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import "./registro.css";
import { useDispatch } from "react-redux";
import { startRegister } from "../../actions/register";

export const Register = () => {

  const dispatch = useDispatch()

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
      dispatch(startRegister({
        name,
        email,
        password,
        confirmPassword,
      }))
    } else {
      console.log("No dio"); // TODO: Salta alerta 
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      return false;
    } else if (!validator.isEmail(email)) {
      return false;
    } else if (password !== confirmPassword || password.length < 8) {
      console.log("fallo");
      return false;
    } else {
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
