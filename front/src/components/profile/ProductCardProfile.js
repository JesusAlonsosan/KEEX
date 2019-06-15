import React from 'react'

const ProductCardProfile = ({inStock,image})=>(
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={image} width='550px' height='550px' alt=""/>
            </div>
            
        </div>
    </div>
)

export default ProductCardProfile