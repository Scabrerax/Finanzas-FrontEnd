import React from 'react'
import { Link } from 'react-router-dom'
import './tarjetas.css'


export const Tarjetas = () => {
  return (
    <div className="mes">
      <div className="card dimensiones">
        <div className="card-body">
          <h5 className="card-title text-dark">Mes</h5>
          <h6 className="card-subtitle mb-2 text-muted">balancexmes</h6>
          <Link to="/">Ver más..</Link>
        </div>
      </div>
    </div>
  )
}