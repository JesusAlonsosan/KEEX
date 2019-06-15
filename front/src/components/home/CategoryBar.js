import React from 'react'

const CategoryBar = ()=>(
<form>
    <fieldset className="uk-fieldset">
        <div className="uk-flex uk-flex-center uk-flex-middle uk uk-margin">
            <select className="uk-select uk-width-2-3@m" style={{marginRight:10}}>
                <option>Selecciona una categoria</option>
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
       
    </fieldset>
</form>
)

export default CategoryBar