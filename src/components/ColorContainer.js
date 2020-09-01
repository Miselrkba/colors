import React, { Component } from "react";
import Box from "./Box";
import "./boxes.css";
// import { choice } from "./helper";
// import uuid from "react-uuid";

export default class ColorContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}
