[Victory](https://www.npmjs.com/package/victory) is a ReactJS based data visualization library.

victory-tree is a tree layout component powered by the math behind d3.layout.tree

`npm install victory-tree`

To see it in action:

`$ cd node_modules/victory-tree`
`$ gulp

### Example Usage
Note that while the node and link properties return svg, they could return React components.

```
var React = require("react");

var VictoryTree = require("victory-tree");

var Visualization = React.createClass({
  getInitalState: function () {
    return {
      height: "2000px",
      width: "3000px"
    }
  },
  node: function (node) {
    return (
      <g>
        <circle r={node.foo} />
        <text={node.bar}> </text>
      </g>
    )
  },
  link: function (link) {
    return (
      <path d={link.diagonal}/>
    )
  },
  render: function () {
    return (
      <svg
        style={{"border": "2px solid black", "margin": "20px"}}
        width={this.state.svgWidth}
        height={this.state.svgHeight}>
          <VictoryTree
            data={fooArrayOfLinksAndNodes}
            node={this.node}
            link={this.link}
            transform={"translate(100,0)"}
          />
      </svg>
    );
  }
})
```

where fooArrayOfLinksAndNodes follows the [d3 hierarchy format](https://github.com/mbostock/d3/wiki/Tree-Layout#nodes):

```
{
 "name": "flare",
 "children": [
  {
   "name": "analytics",
   "children": [
    {
     "name": "cluster",
     "children": [
      {"name": "AgglomerativeCluster", "size": 3938},
      {"name": "CommunityStructure", "size": 3812},
      {"name": "MergeEdge", "size": 743}
     ]
    },
    {
     "name": "graph",
     "children": [
      {"name": "BetweennessCentrality", "size": 3534},
      {"name": "LinkDistance", "size": 5731}
     ]
    }
   ]
  }
 ]
}
```

Flare data (try an `http get`!): `http://www.mocky.io/v2/559cc347d797ef9a2055a59a`