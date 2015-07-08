'use strict';

import React from 'react/addons';
import VictoryTree from '../src/victory-tree';
import request from 'request'

const App = React.createClass({
  getInitalState: function() {
    return {
      height: '2000px',
      width: '3000px'
    }
  },
  node: function(node) {
    return (
      <g>
        <circle r={node.foo}/>
        <text> {node.bar} </text>
      </g>
    )
  },
  link: function(link) {
    return (
      <path d={link.diagonal}/>
    )
  },
  render: function() {
    return (
      <svg
        style={{'border': '2px solid black', 'margin': '20px'}}
        width={this.state.svgWidth}
        height={this.state.svgHeight}>
          <VictoryTree
            data={this.props.data}
            node={this.node}
            link={this.link}
            transform={'translate(100,0)'}
          />
      </svg>
    );
  }
});

const content = document.getElementById('content');

/* go get the example data */
request('http://www.mocky.io/v2/559cc347d797ef9a2055a59a', function (error, response, body) {
  if (!error && response.statusCode === 200 || "200") {
    console.log("Flare data: ", body)
    React.render(<App data={body}/>, content)
  }
})

