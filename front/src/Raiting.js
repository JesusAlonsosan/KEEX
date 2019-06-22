import React from "react";
import ReactDOM from 'react-dom';
import StartRaitingComponent from 'react-star-rating-component';


class Raiting extends React.Component {
    constructor() {
        super();

        this.state = {
            raiting: 1
        };
}

onStartClick(nextValue, prevValue, name) {
    this.setState({raiting: nextValue});
}

render(){
    let { raiting } = this.state;

return (
    <div className="">
        <h2>Keexting desde: { raiting } </h2>
        <StartRaitingComponent
        name="rate1" 
        starCount={5}
        value={raiting}
        //onStarClick={this.onStarClick.bind(this)}
        />
    </div>
    ); 
  }
}

export default Raiting
