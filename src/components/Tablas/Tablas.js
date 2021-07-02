import React from "react";
import { TarjetaTabla } from "./TarjetaTabla";

import { Navbar } from "../Navbar/Nabvar";
import { Footer } from "../footer/Footer";

export const Tablas = () => {
  const tabla = [
    {
      reason: "Egreso",
      budged: "5000",
      tables: [
        {
          reason: "pepino",
          spending: "1200",
        },
        {
          reason: "aguacate",
          spending: "3000",
        },
      ],
      elements: [
        {
          reason: "arepa",
          spending: "4000",
        },
        {
          reason: "tripode",
          spending: "4000",
        },
      ],
    },
    {
      reason: "Gasto",
      budged: "7000",
      tables: [
        {
          reason: "pepino",
          spending: "1200",
        },
        {
          reason: "aguacate",
          spending: "3000",
        },
      ],
      elements: [
        {
          reason: "arepa",
          spending: "4000",
        },
        {
          reason: "tripode",
          spending: "4000",
        },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container main">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {tabla.map((mes, index) => (
            <TarjetaTabla key={index} tarjeta={mes} />
          ))}
        </div>
        <button className="ml-auto btn btn-success btn-circle btn-xl toggle mt-2">
          <h1>+</h1>
        </button>
      </div>
      <Footer />
    </>
  );
};
