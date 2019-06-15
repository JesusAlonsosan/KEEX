import React from 'react'
import Img from '../assets/img/atico.jpeg'
const Cards = ({image,name,description})=>(
    
    <div style={{margin:20}} >   
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src={image} alt=""/>
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
  


)

export default Cards
