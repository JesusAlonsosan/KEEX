import React,{Component} from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import Swipe from './Swipe'


class SwipeContainer extends Component {
  state = {
    products: [
      {
        name: "Platillo volador",
        image: "https://cdn.pixabay.com/photo/2018/12/16/22/47/ufo-3879499_960_720.jpg",
        category: "Transporte",
        description: ""
      },
      {
        name: "Guante Tanos",
        image: "https://i.pinimg.com/736x/d8/a1/df/d8a1df515a673e791ce4a8743fc56216.jpg",
        category: "Accesorios",
        description: ""
      },
      {
        name: "Pepcilindro",
        image: "https://i.pinimg.com/originals/a6/39/c1/a639c10916c1ff3367eab3a71ae3a160.jpg",
        category: "Accesorios",
        description: ""
      },
      {
        name: "Switch Nintendo",
        image: "https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-neon/gallery/bundle_color_portable%20(1).jpg",
        category: "Video Juegos",
        description: ""
      },
      {
        name: "Martillo Thor",
        image: "https://lafrikileria.com/35037-large_default/replica-11-martillo-thor-mjolnir-con-luz-marvel-legends-hasbro.jpg",
        category: "Accesorios",
        description: ""
      }
    ]
  };

  render() {
    let { products } = this.state;
    let item = true;
    return (
      <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ backgroundColor:  "rgb(240, 235, 2)", padding: "60px" ,height:"91.5vh"  }}>
        <div
          style={{
            backgroundColor: "",
            //width: "100%",
            borderRadius: 15,
            padding: 20
          }}
        >
          <div style={{ marginTop: 8 }}>
           
              <Swipe products={products} />
        
          </div>
        </div>
       
        
      </div>
    );
  }
}

export default SwipeContainer;
