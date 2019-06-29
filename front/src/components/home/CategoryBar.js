import React from 'react'

const CategoryBar = ({category,onChange})=>(
<form>
    <fieldset className="uk-fieldset">
        <div className="uk-flex uk-flex-center uk-flex-middle uk uk-margin">
            <select onChange={onChange} className="uk-select uk-width-2-3@m" style={{marginRight:10}} name='category'>
                <option value='all'>Selecciona una categoria</option>
                <option value='all'>Todos los productos</option>
                {category.length ? category.map((data,i)=>
                    <option value={data._id} key={i} >{data.name}</option>)
                    :
                <option>Option 02</option>}
                
            </select>
        </div>
       
    </fieldset>
</form>
)

export default CategoryBar