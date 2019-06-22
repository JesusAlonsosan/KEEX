import React,{Component} from 'react'
import backgroundI from "../assets/img/fondolending.jpg";

import Cards from '../common/Cards';
import ProfileDataUser from './ProfileDataUser';
import ProductCardProfile from './ProductCardProfile';

export default class ProfileContainer extends Component{

    state={
        data:[

            {
                image:backgroundI,
                name:'Cosas viejas',
                description:'Lorem impsu dolor askdoasijdoiasdnoi',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:'https://pbs.twimg.com/media/DvmISHOXgAAc-VV.png',
                name:'Godzilla',
                description:'Lorem impsu dolor Cartas',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:backgroundI,
                name:'Cosas nuevas',
                description:'Lorem impsu dolor askdoasijdoiasdnoi',
                category:'123nijisajd213',
                inStock:false,
            },
            {
                image:backgroundI,
                name:'Cosas medianas',
                description:'Lorem impsu dolor askdoasijdoiasdnoi',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:backgroundI,
                name:'Cosas musica',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                category:'123nijisajd213',
                inStock:false,
            }
        ],

        notFound:{
                image:'http://3.bp.blogspot.com/_OKuxUTAuezU/RtOMIQKUGyI/AAAAAAAAABE/8zZgXZKHNew/s320/homero.gif',
                name:'Aún no subes productos',
                description:'Lorem imaskdoasijdoiasdnoipsu dolor ',
                category:'123nijisajd213',
                inStock:true,
        },
        user:{
            username:'Jesus Alonso',
            lastname:'Sanchez',
            email:'info@keex.com.mx',
            raiting:9.0,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdi02uZ-aY9zVLk3TcmmdQiZeJuZewCPoR1DQicRCqrVge-8q',
            description:'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet '

        }
    }

    render(){
        let {data,notFound,user}=this.state
        let item= true
        return(
            <div
            style={{backgroundColor:'#262626',padding:60 }}>
            <div  style={{backgroundColor: 'rgb(43, 52, 66)', width:'100%',borderRadius:15,padding:20}}>
               <ProfileDataUser {...user}/>

                <div style={{marginTop:20}}>
                {data.map((item,i)=>
                    <ProductCardProfile {...item}/>
                    )}
                </div>
            </div>

          
          </div>
        )
    }
}