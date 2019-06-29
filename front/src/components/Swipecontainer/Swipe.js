import React from "react";
import { Link } from "react-router-dom";


const Swipe = ({products,yes,no}) => (
<div>  
<div className="uk-flex uk-flex-center" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push" height="" >

    <button onChange={yes
    
    
    } className="uk-button uk-button-primary uk-text-bold" uk-icon="icon: heart; ratio: 3.5"></button>

      <img src={products.image} width="550px" height="550px" />

    <button onClick={no}  className="uk-button uk-button-danger uk-text-bold" uk-icon="icon: close; ratio: 3.5"></button>
 
</div>
<div  style={{backgroundColor:'#fff',display:'flex',flexDirection:'column',padding:20}} >
    <p style={{fontWeight:"bold"}}>Nombre: <span>{products.name}</span></p>
 
    <p style={{fontWeight:"bold"}}>Descripción: <span>{products.description}</span></p>
 

</div >
</div>
);

export default Swipe;