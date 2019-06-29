import React, { Component } from "react";
import backgroundI from "../assets/img/fondolending.jpg";

import Cards from "../common/Cards";
import ProfileDataUser from "./ProfileDataUser";
import ProductCardProfile from "./ProductCardProfile";
import { getMyProducts } from "../../services/products";
import ModalEditUser from "../common/ModalEditUser";

export default class ProfileContainer extends Component {
  state = {
    data: [

    ],

    notFound: {
      image:
        "http://3.bp.blogspot.com/_OKuxUTAuezU/RtOMIQKUGyI/AAAAAAAAABE/8zZgXZKHNew/s320/homero.gif",
      name: "Aún no subes productos",
      description: "Por favor sube algún producto ",
      category: "123nijisajd213",
      inStock: true
    },
    user: {
    },
    products:[]
  };
  componentWillMount(){
    this.getData()
  }

  getData=()=>{
    let user = JSON.parse(localStorage.getItem('USER'))
    if(user){
      getMyProducts(user._id).then(r=>this.setState({products:r})).catch(err=>console.log(err))

      this.setState({user})
    }else{
      this.props.history.push('/')
    }
    
  }
  render() {
    let { data, notFound, user,products } = this.state;
    
    console.log('adsadsa',products)
    return (
      <div style={{ backgroundColor: "rgb(240, 235, 2)", padding: 60 }}>
        <div
          style={{
            backgroundColor: "rgb(240, 235, 2)",
            width: "100%",
            borderRadius: 15,
            padding: 20
          }}
        >
          <ProfileDataUser className="" {...user} />

          <div
            className="space uk-child-width-1-4@m uk-flex uk-flex-wrap uk-flex-center "
            style={{
              marginTop: 30,
              backgroundColor: "rgb(240, 235, 2)",
              padding: 10,
              borderRadius: 15
            }}
          >
            {products.length ? data.map((item, i) => 
              <ProductCardProfile {...item} />
            ):
            <ProductCardProfile {...notFound} />
            }
          </div>
        </div>
      </div>
    );
  }
}
