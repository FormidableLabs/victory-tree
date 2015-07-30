/* eslint no-unused-vars:0 */

import d3 from "d3";
import React from "react";
import Radium from "radium";

@Radium
class VictoryTree extends React.Component {
    constructor(props) {
      super(props);
      this.diagonal = d3.svg.diagonal().projection(
        function(d) { return [d.y, d.x]; }
      );
    }
    drawNodes(nodes) {
      var nodeComponents = nodes.map((node, index) => {
        return (
          this.props.node(node, index)
        )
      })
      return (<g>{nodeComponents}</g>)
    }
    drawLinks(links) {
      var linkComponents = links.map((link, index) => {
        return (
          this.props.link(link, this.diagonal, index)
        )
      })
      return (<g>
        {linkComponents}
      </g>)
    }
    render() {
      // todo - check for changes in width height in componentWillRecieveProps
      var d3Tree = d3.layout.tree().size(
        [
          this.props.height,
          this.props.width
        ]
      );
      var nodes = d3Tree.nodes(this.props.data);
      var links = d3Tree.links(nodes);
      return (
        <g transform={this.props.transform}>
          {this.drawNodes(nodes)}
          {this.drawLinks(links)}
        </g>
      )
    }
};

export default VictoryTree;
