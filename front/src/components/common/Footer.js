import React from "react";
import { Link } from "react-router-dom";
import backgroundI from "../assets/img/fondolending.jpg";

const Footer = () => (
  <div className="footercontainer">
    <div className="uk-container uk-container-center">
      <footer className="uk-text-center uk-flex">

            <div className="uk-text-center uk-width-medium-1-3 uk-margin-bottom uk-text-primary uk-text-lead">
             <p className="titleapp">KEEX</p>
            </div>

            <div className="uk-text-center uk-width-medium-1-3 uk-margin-bottom">
                <h2 className="footerh2">¿Necesitas ayuda? ¡Contactanos! <span className="footerspan">info@keex.com.mx</span> </h2>
                <p className="footerh2">Chatea con nosotros o mandanos un mensaje</p>
            </div>
            <div className="uk-text-center uk-width-medium-1-3 uk-margin-bottom">
                <h2 className="footerh2"> Siguenos </h2>
                <a href="" className="uk-icon-button uk-margin-small-right" uk-icon="twitter"></a>
                <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="facebook"></a>
                <a href="" class="uk-icon-button uk-margin-small-right" uk-icon="pinterest"></a>
                 
            </div>
      </footer>
    </div>
  </div>
);

export default Footer;
