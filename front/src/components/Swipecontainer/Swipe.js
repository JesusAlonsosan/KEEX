import React from "react";
import { Link } from "react-router-dom";


const Swipe = ({products}) => (
    
    <div className="uk-flex uk-flex-center" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push" >

    <button className="uk-button uk-button-primary" uk-icon="icon: heart">Te gusta</button>

      <img src="http://idata.over-blog.com/0/36/82/48/ONVNI/Sirene01.jpg" />

    <button className="uk-button uk-button-danger" uk-icon="icon: close">No te gusta</button>

</div>

);

export default Swipe;