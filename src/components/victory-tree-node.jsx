/* eslint no-unused-vars:0 */

import React from "react";
import Radium from "radium";

@Radium
class VictoryTreeNode extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        opened: true
      }
    }

    handleClick(e) {
      e.stopPropagation()
      this.setState({
        opened: !this.state.opened
      })
      this.props.handleClick()
    }

    renderNode() {
      return (
        <g>
          <circle r={this.props.data.children ? 3 : 1}/>
          <text
            textAnchor={this.props.data.children ? "end" : "start"}
            dy={3}
            dx={this.props.data.children ? -8 : 8}
          >{this.props.data.name}</text>
        </g>
      );
    }

    renderChild(child, i) {
      var Node = this.constructor;
      var idx= this.props.index + i + 1;
      return (
        <Node data={child} depth={this.props.depth+1} index={idx} key={idx} handleClick={this.props.handleClick} />
      );
    }

    renderChildren() {
      if(!this.state.opened || !this.props.data.children || !this.props.data.children.length) {
        return null;
      }

      return (
        <g>
          {this.props.data.children.map(this.renderChild.bind(this))}
        </g>
      );
    }

    render() {
      return (
        <g         
          key={this.props.index}
          onClick={this.handleClick.bind(this)}
          style={{cursor: 'pointer'}}
          >

          <g
            transform={"translate(" + this.props.data.y + "," + this.props.data.x + ")"}>
            {this.renderNode()}
          </g>
          {this.renderChildren()}
        </g>
      );
    }
};

export default VictoryTreeNode;
