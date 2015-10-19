/* eslint no-unused-vars:0 */

import d3 from "d3";
import React from "react";
import Radium from "radium";
import VictoryTreeNode from "./victory-tree-node";

@Radium
class VictoryTree extends React.Component {
    constructor(props) {
      super(props);
      this.diagonal = d3.svg.diagonal().projection(
        function(d) { return [d.y, d.x]; }
      );
    }
    handleNodeClick(node) {
      console.log(node)
    }

    render() {
      // todo - check for changes in width height in componentWillRecieveProps
      var d3Tree = d3.layout.tree().size(
        [
          this.props.height,
          this.props.width
        ]
      );

      var root = d3Tree.nodes(this.props.data).filter(node => { return node.depth === 0 })[0];
      var Node = this.props.node;

      console.log(Node)
      
      return (
        <g transform={this.props.transform}>
          <Node data={root} depth={0} index={0} handleClick={this.handleNodeClick} />
        </g>
      )
    }
};

// VictoryTree.propTypes = {
//   node: React.PropTypes.func,
//   link: React.PropTypes.func,
// };

VictoryTree.defaultProps = {
  node: VictoryTreeNode
};

export default VictoryTree;
