import React from "react";
import { Link } from "react-router-dom";

const Toonslending = ({ image, }) => (
  <div className=" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-column uk-flex-middle">
    <div className="uk-flex uk-flex-middle uk-margin uk-margin-auto-left">
      <img src={image} width="400px" height="300px" />
    </div>
  </div>
);

export default Toonslending;
