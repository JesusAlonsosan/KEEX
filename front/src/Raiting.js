import React from "react";
import ReactDOM from "react-dom";
import StartRaitingComponent from "react-star-rating-component";

class Raiting extends React.Component {
  constructor() {
    super();

    this.state = {
      raiting: ""
    };
  }

  onStartClick(nextValue, prevValue, name) {
    this.setState({ raiting: nextValue });
  }

  render() {
    let { raiting } = this.state;

    return (
      <div className="uk-text uk-text-medium">
        <h2 className="uk-text uk-text-large">{raiting} </h2>
        <StartRaitingComponent
          className=""
          name="rate2"
          starCount={5}
          value={raiting}
          starColor={String}
        />
      </div>
    );
  }
}

export default Raiting;
