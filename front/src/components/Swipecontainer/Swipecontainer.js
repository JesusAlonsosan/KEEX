import React,{Component} from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import Swipe from './Swipe'
import { swipProducts } from "../../services/products";


class SwipeContainer extends Component {
  state = {
    products: {},
    user:{}
  };
  componentWillMount(){
    let user = JSON.parse(localStorage.getItem('USER'))
    if(user){
    this.getProduct(user)
    this.setState({user})
    this.setState({user})
    }
  }
  getProduct=(user)=>{
    swipProducts({id:user._id}).then(res=>{
      console.log('ress',res)
      this.setState({products:res.product})}).catch(err=>console.log(err))
  }

  noThanks=()=>{
    let{user}=this.state
    this.getProduct(user)
  }
  yesThanks=()=>{
    let{user}=this.state
    this.getProduct(user)
  }
  render() {
    let { products } = this.state;
    let{noThanks,yesThanks}=this
    let item = true;
    return (
      <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ backgroundColor:  "#fefe3b", padding: "60px" ,height:"91.5vh"  }}>
        <div
          style={{
            backgroundColor: "",
            //width: "100%",
            borderRadius: 15,
            padding: 20
          }}
        >
          <div style={{ marginTop: 8 }}>
           
              <Swipe products={products}  yes={yesThanks} no={noThanks}/>
        
          </div>
        </div>
       
        
      </div>
    );
  }
}

export default SwipeContainer;
