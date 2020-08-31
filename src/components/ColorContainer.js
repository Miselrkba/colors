import React, { Component } from "react";
import { Box } from "./Box";
import "./boxes.css";

export default class ColorContainer extends Component {
  static defaultProps = {
    colors: [
      "#ffcc66",
      "#f9c267",
      "#f2b869",
      "#ecad6a",
      "#e6a36b",
      "#df996c",
      "#d98f6e",
      "#d3856f",
      "#cc7a70",
      "#c67072",
      "#c06673",
      "#b95c74",
      "#b35276",
      "#ac4777",
      "#a63d78",
      "#a0337a",
      "#99297b",
      "#931f7c",
      "#8d147d",
      "#860a7f",
      "#800080",
    ],
  };

  state = {
    count: 0,
  };

  handleClick = () => {
      this.setState(curState => ({
        count: curState.count + 1,
      }))
  }
   
  render() {
    return (
      <div>
        {this.state.count}
        <Box onClick={this.handleClick} />
        <button onClick={this.handleClick} >onClick</button>
      </div>
    );
  }
}
