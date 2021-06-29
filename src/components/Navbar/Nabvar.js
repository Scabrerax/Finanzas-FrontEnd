import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark color">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Finan Fácil
            </Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <div>
                        <h5 className='mt-2'>
                            Balance completo
                        </h5>
                    </div>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Perfil
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}