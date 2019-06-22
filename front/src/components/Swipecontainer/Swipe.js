import React from "react";
import { Link } from "react-router-dom";


const Swipe = ({products}) => (
    
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push" >

    <ul className="uk-slideshow-items uk-flex uk-flex-center">
     {products.map((product,i)=>
                <li key={i}>
                <img src={product.image} alt="" uk-cover/>
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 className="uk-margin-remove">{product.name}</h3>
                    <p className="uk-margin-remove">{product.description}</p>
                </div>
            </li>
            
    )}
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

);

export default Swipe;