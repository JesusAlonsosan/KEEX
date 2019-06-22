import React from 'react'
import Raiting from '../../Raiting';

const ProfileDataUser = ({username,description,image,raiting})=>(
    <div className=" uk-flex uk-flex-center uk-flex-column	" >
    <div className="uk-container uk-container-center ">
        <img src={image} width='200px' height='200px' style={{borderRadius:200/2}}/>
    </div>
    <div className="uk-container uk-container-center"  style={{backgroundColor:'#fff',padding:10 ,borderRadius:15,marginTop:20 }}>
    <article className="uk-article">

            <h1 className="uk-article-title">{username}</h1>

            <p className="uk-article-meta">Acerca de mi:</p>

            <p className="uk-text-lead">{description}</p>

            

            <div className="uk-grid-small uk-child-width-auto" uk-grid>
                <div>
                    <a className="uk-button uk-button-text" href="#">raiting</a>
                </div>
                <div>
                     <Raiting/>
                </div>
            </div>

            </article>
        
    </div>
</div>
)

export default ProfileDataUser