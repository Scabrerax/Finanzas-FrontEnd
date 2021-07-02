import React from "react";
import "./home.css";

import { Navbar } from "../Navbar/Nabvar";
import { Footer } from "../footer/Footer";
import { Tarjetas } from "./Tarjetas";

//monto: balance por mes
//[index:123123,{mes:'enero',ingresos:'5000',egresos:'1000',balance:'4000'}]

export const Home = () => {
  const home = [
    { mes: "Enero", ingresos: "5000", egresos: "1000", balance: "4000" },
    { mes: "Febrero", ingresos: "5000", egresos: "1000", balance: "4000" },
  ];
  return (
    <div>
      <Navbar />

      <div className="container main">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {home.map((mes, index) => (
            <Tarjetas key={index} tarjeta={mes} />
          ))}
        </div>
        <button className="ml-auto btn btn-success btn-circle btn-xl toggle mt-2">
          <h1>+</h1>
        </button>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
