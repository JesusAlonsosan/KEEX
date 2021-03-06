import React from 'react'
import Raiting from '../../Raiting';
import {Link} from 'react-router-dom'
const ProfileDataUser = ({username,description,image,raiting})=>(
    <div className=" uk-flex uk-flex-center" >
    <div className="uk-container uk-container-center ">
        <img src={image} width='350px' height='35   0px' style={{borderRadius:150/2}}/>
    </div>
    <div className="uk-container uk-container-xsmall uk-flex uk-flex-center"  style={{backgroundColor:'#fefe3b',padding:10 ,borderRadius:15,marginTop:10 }}>


    <article className="uk-article">

            <h1 className="uk-text uk-text-large">{username}</h1>

            <p className="uk-text-emphasis uk-text-large">Acerca de mi:</p>

            <p className="uk-text-lead">{description}</p>

            

            <div className="uk-grid-xsmall uk-child-width-auto" uk-grid>
                <div>
                    <a className="uk-text uk-text-large" href="">Raiting</a>
                </div>
                <div className="uk-text uk-text-large">
                     <Raiting className=""/>
                </div>
                <div className="uk-text uk-text-large uk-flex uk-flex-column">
                     <Link to='/editUser' >Editar perfil</Link>
                     <Link to='/addProduct' >Agregar producto </Link>
                </div>
               
            </div>
            
    </article>

    
    </div>
</div>
)

export default ProfileDataUser