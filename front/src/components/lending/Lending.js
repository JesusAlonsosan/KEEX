import React, { Component } from "react";
import backgroundI from "../assets/img/fondolending.jpg";
import Titlelending from "./Titlelending";
import Whatislending from "./Whatislending";
import Footer from "../common/Footer";
import image1 from "../assets/img/toons/1.jpeg";
import image2 from "../assets/img/toons/2.jpeg";
export default class Lending extends Component {

  state={
    toons:[
      {
        image:image1,
        despriction:'lorem impus doto asdasdajdsiasjdijsaidjsaidjsaidjsaijdsaijdisajdisajd'
      },
      {
        image:image2,
        despriction:'lorem impus doto asdasdajdsiasjdijsaidjsaidjsaidjsaijdsaijdisajdisajd'
      },

    ]
  }

  render() {
    let {toons}=this.state
    return (
      <div>
        <Titlelending />
        <div className=" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"
          style={{ padding: "5% 20% 7%" }}  style={{ height: "600px" ,backgroundColor: "#2b3442", }}>

          <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
           >

            <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;" style={{color:'#fff'}}> ¿KEEX QUE ES? </h1>
            <p
              uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;" style={{fontSize:26}}
            >
              En una App para organizar una red propia de trueque.
            </p>
          </div>
        </div>

        <Whatislending toons={toons} />
        <Footer />
      </div>
    );
  }
}
