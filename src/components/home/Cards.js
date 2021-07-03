import React from "react";
import { Link } from "react-router-dom";
import "./tarjetas.css";

export const Cards = (home) => {
  const { card } = home;
  const { mounth, entry, egress, balance } = card;

  return (
    <div className="mes">
      <div className="card dimensiones">
        <div className="card-body">
          <h4 className="card-title text-dark">{mounth}</h4>
          <hr />
          <Link to="/Tablas" style={{ textDecoration: "none" }}>
            <div className="diverso">
              <h5 className="card-title text-dark">Ingresos: </h5>
              <h6 className="card-subtitle mb-2 text-muted">{entry}</h6>
            </div>
          </Link>
          <Link to="/Tablas" style={{ textDecoration: "none" }}>
            <div className="diverso">
              <h5 className="card-title text-dark">Egresos:</h5>
              <h6 className="card-subtitle mb-2 text-muted">{egress}</h6>
            </div>
          </Link>
          <h5 className="card-title text-dark">Balance</h5>
          <h6 className="card-subtitle mb-2 text-muted">{balance}</h6>
        </div>
      </div>
    </div>
  );
};
