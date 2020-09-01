import React, { Component } from "react";
import { choice } from "./helper";

class Box extends Component {
  static defaultProps = {
    allColors: [
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
    color: choice(this.props.allColors),
  };

  pickColor = () => {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
      //below you set the condition for stoping
      //so if the color is already in state it stops
      //this way you can never have two same colors showing
    } while (newColor === this.state.color);

    this.setState({
      color: newColor,
    });
  };

  handleClick = () => {
    this.pickColor();
  };

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
