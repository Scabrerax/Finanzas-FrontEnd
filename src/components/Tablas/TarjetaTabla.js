import React from "react";
import  '../home/tarjetas.css'

export const TarjetaTabla = (table) => {
    
  const {tarjeta} = table
  const {reason,budged,tables,elements} = tarjeta
  return (
    <div className="mes">
      <div className="card dimensiones">
        <div className="card-body">
          <h5 className="card-title text-dark">{reason}</h5>
          <hr/>
          <h6 className="card-subtitle mb-2 text-muted">Presupuesto: {budged}</h6>
          {tables.map(({ reason, spending }, index) => {
            return (
              <div key={index}>
                <h4>{reason}:</h4> {spending}
              </div>
            );
          })}
          {elements.map(({ reason, spending }, index) => {
            return (
              <div key={index}>
                <h4>{reason}:</h4> {spending}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
