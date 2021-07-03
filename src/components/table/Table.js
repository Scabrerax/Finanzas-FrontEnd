import React from "react";
import { CardTable } from "./CardTable";

export const Table = () => {
  const table = [
    {
      reason: "Egreso",
      budget: "5000",
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
      budget: "7000",
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
      <div className="container main">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {table.map((mounth, index) => (
            <CardTable key={index} card={mounth} />
          ))}
        </div>
        <button className="ml-auto btn btn-success btn-circle btn-xl toggle mt-2">
          <h1>+</h1>
        </button>
      </div>
    </>
  );
};
