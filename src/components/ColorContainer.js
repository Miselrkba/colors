import React, { Component } from "react";
import { Box } from "./Box";
import "./boxes.css";
import { choice } from "./helper";
import uuid from "react-uuid";

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
    const rand = Math.floor(Math.random() * this.props.colors.length);
    this.setState((curState) => ({
      count: curState.count + rand,
    }));
  };

  render() {
    const getColor = choice(this.props.colors);
    console.log(getColor);
    let boxes = [];
    while (boxes.length < 18) {
      boxes.push(
        <Box key={uuid()} onClick={this.handleClick} color={choice(this.props.colors)} />
      );
    }
    
    return (
      <div>
        {this.state.count}
        <div className="container">{boxes}</div>
        <button onClick={this.handleClick}>onClick</button>
      </div>
    );
  }
}
