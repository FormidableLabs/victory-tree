/*global document:false*/

import React from "react";
import Radium from  "radium";
import {VictoryTree, VictoryTreeNode} from "../src/index";

class CustomNode extends VictoryTreeNode {
  renderNode() {
      const styles = {
        rect: {
          stroke: "blue",
          fill: "none"
        }
      };
      const size = 50;
      return (
          <g>
            <rect width={size} height={size} style={styles.rect} />
            <text
              textAnchor="middle"
              dy={0.65 * size}
              dx={size / 2}
            >{this.props.data.name}</text>
          </g>
      );
    }
}

@Radium
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  render() {
    return (
      <svg
        width={this.state.width}
        height={this.state.height}>
          <VictoryTree
            height={this.state.height}
            width={this.state.width-300 /* padding niceness tbd */}
            data={this.props.data}
            node={CustomNode}
            transform={"translate(150,0)"}
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
