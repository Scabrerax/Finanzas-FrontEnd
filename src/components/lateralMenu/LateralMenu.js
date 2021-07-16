import React from "react";
import "./lateralMenu.css";
import { Table } from "../table/Table";

export const LateralMenu = () => {
  const mounths = ["enero","febrero","marzo","mayo","diciembre"];

  const handleEntry = (e) => {
    e.preventDefault();
  };

  const handleEgress = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className=" main ">
        <div className="col-2 div1">
          <select className="form-select-sm select mt-3" aria-label=".form-select-sm example">
            <option selected>Selecione 
                            un mes</option>
            {mounths.map((mounth, index) => {
              return (
                <option key={index} value='0'>
                  {mounth}
                </option>
              );
            })}
          </select>
          <div className="div2 mt-5">
            <h2>Enero</h2>
            <div onClick={handleEntry} className="diverso">
              <div className="diverso">
                <h5 className="card-title text-dark">Ingresos</h5>
              </div>
            </div>
            <div onClick={handleEgress} className="diverso">
              <div className="diverso">
                <h5 className="card-title text-dark">Egresos</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10">
          <Table />
        </div>
      </div>
    </div>
  );
};
