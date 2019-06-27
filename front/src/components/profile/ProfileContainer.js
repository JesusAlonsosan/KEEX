import React, { Component } from "react";
import backgroundI from "../assets/img/fondolending.jpg";

import Cards from "../common/Cards";
import ProfileDataUser from "./ProfileDataUser";
import ProductCardProfile from "./ProductCardProfile";

export default class ProfileContainer extends Component {
  state = {
    data: [
      {
        image: backgroundI,
        name: "Cosas viejas",
        description: "Lorem impsu dolor askdoasijdoiasdnoi",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: "https://pbs.twimg.com/media/DvmISHOXgAAc-VV.png",
        name: "Godzilla",
        description: "Lorem impsu dolor Cartas",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: backgroundI,
        name: "Cosas nuevas",
        description: "Lorem impsu dolor askdoasijdoiasdnoi",
        category: "123nijisajd213",
        inStock: false
      },
      {
        image: backgroundI,
        name: "Cosas medianas",
        description: "Lorem impsu dolor askdoasijdoiasdnoi",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: backgroundI,
        name: "Cosas musica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        category: "123nijisajd213",
        inStock: false
      }
    ],

    notFound: {
      image:
        "http://3.bp.blogspot.com/_OKuxUTAuezU/RtOMIQKUGyI/AAAAAAAAABE/8zZgXZKHNew/s320/homero.gif",
      name: "Aún no subes productos",
      description: "Lorem imaskdoasijdoiasdnoipsu dolor ",
      category: "123nijisajd213",
      inStock: true
    },
    user: {
      username: "Jesús Alonso",
      lastname: "Sanchez",
      email: "info@keex.com.mx",
      raiting: 9.0,
      image:
        "https://tuul.tv/themes/tuul_lite/img/default-user.jpg ",
      description:
        "La informática es mi hobby, mi profesión y mi pasión. Soy un afortunado usuario y desarrollador. Disfruto de esto desde hace ya más de 15 años, y gracias a Ironhack "
    }
  };

  render() {
    let { data, notFound, user } = this.state;
    let item = true;
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
            {data.map((item, i) => (
              <ProductCardProfile {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
