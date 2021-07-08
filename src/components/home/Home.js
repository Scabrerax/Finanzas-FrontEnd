import React from "react";
import "./home.css";

import { Navbar } from "../Navbar/Nabvar";
import { Footer } from "../footer/Footer";
import { Tarjetas } from "./Tarjetas";

export const Home = () => {
  const tarjetas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const activate = () => {
    const toast = document.querySelector("#liveToast");
    toast.className = "mostrar";
    setTimeout(function () {
      toast.className = toast.className.replace("mostrar", "");
    }, 3000);
  };

  const deactivate = () => {
    var toast = document.getElementById("liveToast");
    toast.className = "cerrar";
    toast.className = toast.className.replace("cerrar", "");
  };

  return (
    <div>
      <Navbar />

      <div className="container main">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {tarjetas.map((tarjeta, index) => (
            <Tarjetas key={index} tarjeta />
          ))}
        </div>
        <button className="ml-auto btn btn-success btn-circle btn-xl toggle mt-2">
          <h1>+</h1>
        </button>
      </div>
      <button className="btn btn-primary" onClick={activate}>
        activate
      </button>
      <div id="liveToast" className="toast hide">
        <div className="toast-header">
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            onClick={deactivate}
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
