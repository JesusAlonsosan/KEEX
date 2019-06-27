import React from "react";
import { Link } from "react-router-dom";
import backgroundI from "../assets/img/fondolending.jpg";

const Footer = () => (
  <div className="footercontainer">
    <div className="uk-container uk-container-center">
      <footer className="uk-text-center uk-flex">

            <div className="uk-margin-small">
             <p className="titlehkeex3">KEEX</p>
            </div>

            <div className="uk-flex uk-flex-center uk-margin-medium-left">
                <span className="footerh2">info@keex.com.mx  ¡Contactanos!</span>
                <img src=""></img>
            </div>

            <div className="uk-flex uk-flex-center uk-margin-xlarge">

              <img className="uk-margin-small-right" src="https://image.flaticon.com/icons/png/512/124/124010.png" width="15%"></img>
              <img className="uk-margin-small-right" src="https://image.flaticon.com/icons/png/512/124/124010.png" width="15%"></img>
              <img className="uk-margin-small-right" src="https://image.flaticon.com/icons/png/512/124/124010.png" width="15%"></img>
            
            </div>

      </footer>
    </div>
  </div>
);

export default Footer;
