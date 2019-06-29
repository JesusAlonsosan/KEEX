import React from "react";
import { Link } from "react-router-dom";
import backgroundI from "../assets/img/fondolending.jpg";

const Footer = () => (
  <div className="footercontainer">
    <div className="uk-container uk-container-center">
      <footer className="uk-text-center uk-flex">

            <div className="uk-position-center-left uk-margin-left uk-margin-medium uk-width-2-3@m">
             <p className="titlehkeex3">KEEX</p>
            </div>

             
            
            <div className="uk-text-large uk-position-center uk-margin-medium-left uk-width-2-3@m">
            <span uk-icon="icon: facebook; ratio: 3.5"></span>
            <span uk-icon="icon: instagram; ratio: 3.5"></span>
            <span uk-icon="icon: foursquare; ratio: 3.5"></span>
            <span uk-icon="icon: mail; ratio: 3.5" className="uk-margin-medium-rigth"></span>

            </div>

            <div className="uk-text-large uk-position-center-right uk-margin-xlarge-left uk-width-2-3@m">
             <p className="titleh"> in  f  o  @  k  e e  x  .  c  om </p>
             
            </div>

      </footer>
    </div>
  </div>
);

export default Footer;
 