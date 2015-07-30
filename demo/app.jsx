/*global document:false*/

import React from "react";
import Radium from  "radium";
import {VictoryTree} from "../src/index";

@Radium
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getStyles = this.getStyles.bind(this);
    this.state = {
      height: 2000,
      width: 3000
    };
  }
  getStyles() {
    return {
      svg: {
        "border": "2px solid black",
        "margin": "20px"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <svg
        style={[styles.svg]}
        width={this.state.width}
        height={this.state.height}>
          <VictoryTree
            height={this.state.height}
            width={this.state.width-300 /* padding niceness tbd */}
            data={this.props.data}
            transform={"translate(100,0)"}
          />
      </svg>
    );
  }
}

const content = document.getElementById("content");

/* go get the example data */

d3.json("https://rawgit.com/mbostock/1093025/raw/a05a94858375bd0ae023f6950a2b13fac5127637/flare.json", function(error, json) {
  if (error) {
    return console.warn(error);
  }
  React.render(<App data={json}/>, content)
});
