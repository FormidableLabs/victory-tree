'use strict';

var React = require('react/addons');
var VictoryTree = require('../src/victory-tree');
var d3 = require('d3');

var App = React.createClass({
  getInitialState: function() {
    return {
      height: 2000,
      width: 3000
    }
  },
  node: function(node, index) {
    return (
      <g key={index} transform={'translate(' + node.y + ',' + node.x + ')'}>
        <circle r={node.children ? 3 : 1}/>
        <text
          textAnchor={node.children ? 'end' : 'start'}
          dy={3}
          dx={node.children ? -8 : 8}
          style={{
            "fontFamily": "Helvetica",
            "fontSize": "10px"
          }}
        >{node.name}</text>
      </g>
    )
  },
  link: function(link, diagonal, index) {
    return (
      <path
        key={index}
        d={diagonal(link)}
        style={{
          'fill': 'none',
          'stroke': 'darkgrey',
          'strokeWidth': '.4px'
        }}/>
    )
  },
  render: function() {
    return (
      <svg
        style={{'border': '2px solid black', 'margin': '20px'}}
        width={this.state.width}
        height={this.state.height}>
          <VictoryTree
            height={this.state.height}
            width={this.state.width}
            data={this.props.data}
            node={this.node}
            link={this.link}
            transform={'translate(100,0)'}
          />
      </svg>
    );
  }
});

var content = document.getElementById('content');

/* go get the example data */

d3.json('https://rawgit.com/mbostock/1093025/raw/a05a94858375bd0ae023f6950a2b13fac5127637/flare.json', function(error, json) {
  if (error) {
    return console.warn(error);
  }
  React.render(<App data={json}/>, content)
});
