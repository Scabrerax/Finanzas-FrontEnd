import React from "react";
import "./home.css";

import { Cards } from "./Cards";

export const Home = () => {
  const home = [
    { mounth: "Enero", entry: "5000", egress: "1000", balance: "4000" },
    { mounth: "Febrero", entry: "5000", egress: "1000", balance: "4000" },
  ];
  return (
    <div>

      <div className="container main">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {home.map((mounth, index) => (
            <Cards key={index} card={mounth} />
          ))}
        </div>
        <button className="ml-auto btn btn-success btn-circle btn-xl toggle mt-2">
          <h1>+</h1>
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
