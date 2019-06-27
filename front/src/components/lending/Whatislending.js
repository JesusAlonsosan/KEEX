import React from "react";
import { Link } from "react-router-dom";
import backgroundI from "../assets/img/fondolending.jpg";
import image3 from "../assets/img/toons/3.jpeg";
import image4 from "../assets/img/toons/4.jpeg";
import Toonslending from "./Toonslending";

const Whatislending = ({ toons }) => (
  <div
    className=" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-medium uk-flex-column"
    style={{ backgroundColor: "#f7f7f7", padding: "5% 20% 7%", height: "35%" }}
  >
    <div className="uk-container-center uk-text-center">
      <h2 className="subtitleh2 uk-text-center" style={{ color: "#0E0E0E" }}>
        ¿KEEX, EN QUÉ CONSISTE?
      </h2>
    </div>

    <div className="uk-container-center uk-text-center">
      <p
        className="uk-text-large uk-text-center uk-margen-medium-top  "
        style={{ fontSize: 31, color: "#666" }}
      >
        En que cualquier sector de la sociedad puede hacer un intercambio de
        algún objeto y servicio por otros objetos o servicios.
      </p>
    </div>

    <div className="uk-flex uk-flex-center uk-margin-large">
      {" "}
      {toons.map((data, i) => (
        <Toonslending key={i} {...data} />
      ))}
      <div className=" uk-panel uk-flex uk-flex-center@s uk-flex-column" />
    </div>
  </div>
);

export default Whatislending;
