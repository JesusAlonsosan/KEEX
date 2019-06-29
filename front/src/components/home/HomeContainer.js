import React, { Component } from "react";
import backgroundI from "../assets/img/atico.jpeg";

import Cards from "../common/Cards";
import CategoryBar from "./CategoryBar";
import { getCategories } from "../../services/categories";
import { getAllProducts, getByCategory } from "../../services/products";

export default class HomeContainer extends Component {
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
        image: backgroundI,
        name: "Cartas yugi",
        description: "Lorem impsu dolor askdoasijdoiasdnoi",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: backgroundI,
        name: "Cosas nuevas",
        description: "Lorem impsu dolor askdoasijdoiasdnoi",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: backgroundI,
        name: "Cosas media",
        description: "Lorem impsu dolor askdoasijdoiasdnoi",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: backgroundI,
        name: "Cosas musica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: backgroundI,
        name: "Cosas musica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        category: "123nijisajd213",
        inStock: true
      },
      {
        image: backgroundI,
        name: "Cosas musica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        category: "123nijisajd213",
        inStock: true
      }
    ],

    notFound: {
      image:
        "https://i.pinimg.com/originals/7c/42/97/7c42975ef89a34943bcb5e022a326840.jpg",
      name: "No hay produtos",
      description: "Aún no hay ningun producto en esta categoria ",
      category: "123nijisajd213",
      inStock: true
    },
    category: [],
    products: [],
    cat: "all"
  };
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("USER"));
    if (user) {
      this.getProducts();
      this.getAllData();
    } else {
      this.props.history.push("/");
    }
  }
  getAllData = () => {
    getCategories()
      .then(res => this.setState({ category: res.category }))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    let { value } = e.target;
    this.setState({ cat: value }, () => {
      this.getProducts();
    });
    console.log(e.target.value);
  };
  getProducts = () => {
    let { cat } = this.state;
    let user = JSON.parse(localStorage.getItem("USER"));
    if (user && cat === "all") {
      getAllProducts({ id: user._id })
        .then(res => this.setState({ products: res.product }))
        .catch(err => console.log("error", err));
    } else {
      getByCategory(cat, { id: user._id })
        .then(res => this.setState({ products: res.products }))
        .catch(err => console.log("error", err));
    }
  };
  render() {
    let { products, notFound, category } = this.state;
    let { handleChange } = this;
    console.log(products);
    return (
      <div
        style={{
          backgroundColor: "rgb(240, 235, 2)",
          padding: 80,
          height: products.length ? null : "90vh"
        }}
      >
        <CategoryBar onChange={handleChange} category={category} />

        <div
          className="uuk-container uk-container-xpand"
          style={{
            backgroundColor: "rgb(240, 235, 2)",
            width: "100%",
            padding: 10,
            borderRadius: 15,
            height: products.length ? null : "600px"
          }}
        >
          <div
            className="uk-child-width-1-5@m uk-flex uk-flex-wrap uk-flex-center"
            uk-grid
          >
            {products.length ? (
              products.map((item, i) => <Cards key={i} {...item} />)
            ) : (
              <Cards {...notFound} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
