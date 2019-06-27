import React from "react";
import { Link } from "react-router-dom";


const Swipe = ({products}) => (
    
    <div className="uk-flex uk-flex-center" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push" >

    <button className="uk-button uk-button-primary uk-text-bold" uk-icon="icon: heart; ratio: 3.5"></button>

      <img src="https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDM1MzQ4fGltYWdlL2pwZWd8aGQ5L2hhMy84Nzk4NzA4NDk4NDYyfDdiZDIzNTFhODMwMWY2MDAwNDNlY2M5MDAzYTg2NTgzNzVmYTBmNGQxZWQwOWJhMjFhNDg4ZmNlOGI0ZjI5NzM" />

    <button className="uk-button uk-button-danger uk-text-bold" uk-icon="icon: close; ratio: 3.5"></button>

</div>

);

export default Swipe;