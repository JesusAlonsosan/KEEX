import React from 'react'

const ProductCardProfile = ({description,image,name})=>(
    <div className=" uk-card uk-card-default" style={{margin: 10,borderRadius:15,padding:10}} >
        <div className="uk-card-media-center uk-flex uk-flex-center ">
            <img  src={image} width='400px' height='400px' width='500px'/>
        </div>
        <div>
            <h3 className="uk-card-title card-title uk-text-large">{name}</h3>
            <p>{description}</p>
         </div>
    </div>
)

export default ProductCardProfile