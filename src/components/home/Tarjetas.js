import React from 'react'
import { Link } from 'react-router-dom'
import './tarjetas.css'

export const Tarjetas = (home) => {
  const {tarjeta} = home
  const {mes,ingresos,egresos,balance} = tarjeta

  return (
    <div className="mes">
      <div className="card dimensiones">
        <div className="card-body">
          <h4 className="card-title text-dark">{mes}</h4>
          <hr/>
          <Link to ='/Tablas' style={{ textDecoration: 'none'}}> 
            <div className='diverso' >
              <h5 className="card-title text-dark">Ingresos: </h5>
              <h6 className="card-subtitle mb-2 text-muted">{ingresos}</h6>
            </div>
          </Link>
          <Link to ='/Tablas' style={{ textDecoration: 'none'}}> 
            <div className='diverso'>
              <h5 className="card-title text-dark">Egresos:</h5>
              <h6 className="card-subtitle mb-2 text-muted">{egresos}</h6>
            </div>
          </Link>
          <h5 className="card-title text-dark">Balance</h5>
          <h6 className="card-subtitle mb-2 text-muted">{balance}</h6>
        </div>
      </div>
    </div>
  )
}