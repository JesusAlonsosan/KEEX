import React,{Component} from 'react'
import backgroundI from "../assets/img/atico.jpeg";

import Cards from '../common/Cards';
import CategoryBar from './CategoryBar';

export default class HomeContainer extends Component{

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
                image:backgroundI,
                name:'Cartas yugi',
                description:'Lorem impsu dolor askdoasijdoiasdnoi',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:backgroundI,
                name:'Cosas nuevas',
                description:'Lorem impsu dolor askdoasijdoiasdnoi',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:backgroundI,
                name:'Cosas media',
                description:'Lorem impsu dolor askdoasijdoiasdnoi',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:backgroundI,
                name:'Cosas musica',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:backgroundI,
                name:'Cosas musica',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                category:'123nijisajd213',
                inStock:true,
            },
            {
                image:backgroundI,
                name:'Cosas musica',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing.',
                category:'123nijisajd213',
                inStock:true,
            }
        ],

        notFound:{
                image:'https://i.pinimg.com/originals/7c/42/97/7c42975ef89a34943bcb5e022a326840.jpg',
                name:'No hay produtos',
                description:'Lorem imaskdoasijdoiasdnoipsu dolor ',
                category:'123nijisajd213',
                inStock:true,
        }
    }

    render(){
        let {data,notFound}=this.state
        let item= true
        return(
            <div 
            style={{backgroundColor:'#fefe3b',padding:80,height:item?null:'90vh' }}>
            <CategoryBar/>
            
            <div className="uuk-container uk-container-xpand"  style={{backgroundColor:'#fefe3b', width:'100%',padding:10 ,borderRadius:15, height:item?null:'600px' }}>
            <div className="uk-child-width-1-5@m uk-flex uk-flex-wrap uk-flex-center" uk-grid>
             {item ? data.map((item,i)=>
                <Cards key={i} {...item}/>)
                :
                <Cards {...notFound}/> 
            }
             
            </div>
                
            </div>
          
          </div>
        )
    }
}