import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogOut } from '../../actions/login'
import './header.css'

export const Header = () => {

  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(startLogOut())
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark color">
      <Link className="navbar-brand" to="/" >
        <img src="./assets/logo.png" alt="piggy-bank logo" />
        Finan Fácil
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div>
            <h5 className=''>
              Balance completo
            </h5>
          </div>
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle cursor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-cog fa-2x"></i>
            </div>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <Link onClick={handleLogOut} className="dropdown-item" to="/">Cerrar sesión</Link>
              <Link className="dropdown-item" to="/">Cambiar contraseña</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}