import React from "react";
import { Link } from "react-router-dom";
import backgroundI from "../assets/img/atico.jpeg";

const Titlelending = () => (
  <div
    className="uk-flex uk-flex-center uk-flex-middle uk-height-large uk-background-cover uk-light uk-flex"
    uk-parallax="bgy: -200"
    style={{ backgroundImage: `url(${backgroundI})`, height: "75vh" }}
  >
    <div className="uk-flex uk-flex-column uk-text-center">
      {/*<img src={require('../assets/img/logo/logo.png')}/>*/}
      <h1 className="titlehkeex">K E E X</h1>
      <p className="uk-text-large uk-flex uk-flex-center" />
    </div>
  </div>
);

export default Titlelending;
