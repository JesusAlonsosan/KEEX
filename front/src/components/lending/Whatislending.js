import React from "react";
import { Link } from "react-router-dom";
import backgroundI from "../assets/img/fondolending.jpg";

import image3 from "../assets/img/toons/3.jpeg";
import image4 from "../assets/img/toons/4.jpeg";
import Toonslending from "./Toonslending";

const Whatislending = ({toons}) => (
  <div
    className=" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle uk-flex-column"
    style={{ backgroundColor:'#f7f7f7', padding: "5% 20% 7%", height: "40%" }}
  >
    <div className="uk-container-center uk-text-center">

      <h2 className="subtitleh2 uk-text-center" style={{color:'#6e6e6e'}}>
        ¿KEEX EN QUÉ CONSISTE?
      </h2>

    </div>

    <div className="uk-container-center uk-text-center">

      <p className="uk-text-large uk-text-center">
        En que cualquier sector de la sociedad puede hacer un intercambio de algún
        objeto y servicio por otros objetos o servicios.
      </p>     

    </div> 

    

    <div className='uk-flex uk-flex-middle'>
    {toons.map((data,i) =><Toonslending key={i} {...data} />)}
    <div className=" uk-panel uk-flex uk-flex-center@s uk-flex-column">

        <div>
        <img src={image3} width='150px' height='150px'/>
        <img src={image4} width='150px' height='150px'/>
        </div>
        
        <p className='uk-flex uk-flex-middle'> 
          Lorem ipsum sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

      </div>

    </div>
   

  </div>
);

export default Whatislending;
