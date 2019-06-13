import React, { Component } from "react";
import backgroundI from "../assets/img/fondolending.jpg";
import Titlelending from "./Titlelending";
import Whatislending from "./Whatislending";
import Footer from "../common/Footer";


export default class Lending extends Component {
  render() {
    return (
      <div>
        <Titlelending />
        <div
          className=" uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"
          style={{ padding: "5% 20% 7%", height: "40vh" }}
        >
          <div
            className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
            style={{ height: "40vh" }}
          >
            <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">
              Headline
            </h1>
            <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <Whatislending />
        <Footer/>
      </div>
    );
  }
}
